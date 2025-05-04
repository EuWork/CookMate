import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { FavoritesApi } from '../services/api.ts';
import { FavoritesContextType } from '@/types/FavoritesContextType';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<RecipeTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await FavoritesApi.GetFavorites();
      setFavorites(response.data);
    } catch (err) {
      setError('Не удалось загрузить избранные рецепты');
      console.error('Fetch favorites error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const isFavorite = useCallback(
    (id: number | undefined) => favorites.some(fav => fav.id === id),
    [favorites]
  );

  const updateFavorite = useCallback((updatedRecipe: RecipeTypes) => {
    setFavorites(prev => prev.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ));
  }, []);

  const removeFavoriteById = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await FavoritesApi.RemoveFavorite(id);
      setFavorites(prev => prev.filter(recipe => recipe.id !== id));
    } catch (err) {
      setError('Не удалось удалить рецепт из избранного');
      console.error('Remove favorite error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleFavorite = useCallback(async (recipe: RecipeTypes) => {
    setLoading(true);
    setError(null);
    try {
      if (isFavorite(recipe.id)) {
        await FavoritesApi.RemoveFavorite(recipe.id);
        setFavorites(prev => prev.filter(fav => fav.id !== recipe.id));
      } else {
        if (recipe.isExternal) {
          const response = await FavoritesApi.AddExternalFavorite({
            externalId: recipe.id.toString(),
            name: recipe.name,
            cookingTime: recipe.cookingTime,
            calories: recipe.calories,
            image: typeof recipe.image === 'string' ? recipe.image : undefined,
            ingredients: recipe.ingredients,
            steps: recipe.steps
          });
          setFavorites(prev => [...prev, recipe]);
        } else {
          await FavoritesApi.AddFavorite(recipe.id);
          setFavorites(prev => [...prev, recipe]);
        }
      }
    } catch (err) {
      setError('Не удалось обновить избранное');
      console.error('Toggle favorite error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isFavorite]);

  const contextValue = useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite,
    updateFavorite,
    removeFavorite: removeFavoriteById,
    loading,
    error,
    refreshFavorites: fetchFavorites,
  }), [favorites, toggleFavorite, isFavorite, updateFavorite, removeFavoriteById, loading, error, fetchFavorites]);

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
