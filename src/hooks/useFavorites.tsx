import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { FavoritesApi } from '@/services/api';

type FavoritesContextType = {
  favorites: RecipeTypes[];
  toggleFavorite: (recipe: RecipeTypes) => Promise<void>;
  isFavorite: (id: number) => boolean;
  updateFavorite: (updatedRecipe: RecipeTypes) => void;
  removeFavorite: (id: number) => Promise<void>;
  loading: boolean;
  error: string | null;
  refreshFavorites: () => Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: async () => {},
  isFavorite: () => false,
  updateFavorite: () => {},
  removeFavorite: async () => {},
  loading: false,
  error: null,
  refreshFavorites: async () => {},
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                             children,
                                                                           }) => {
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const toggleFavorite = useCallback(async (recipe: RecipeTypes) => {
    setLoading(true);
    setError(null);
    try {
      const isFav = favorites.some(fav => fav.id === recipe.id);

      if (isFav) {
        await FavoritesApi.RemoveFavorite(recipe.id);
        setFavorites(prev => prev.filter(fav => fav.id !== recipe.id));
      } else {
        await FavoritesApi.AddFavorite(recipe.id);
        setFavorites(prev => [...prev, recipe]);
      }
    } catch (err) {
      setError('Не удалось обновить избранное');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [favorites]);

  const updateFavorite = useCallback((updatedRecipe: RecipeTypes) => {
    setFavorites(prev =>
      prev.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe,
      ),
    );
  }, []);

  const removeFavorite = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await FavoritesApi.RemoveFavorite(id);
      setFavorites(prev => prev.filter(recipe => recipe.id !== id));
    } catch (err) {
      setError('Не удалось удалить рецепт из избранного');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const isFavorite = useCallback(
    (id: number) => {
      return favorites.some(fav => fav.id === id);
    },
    [favorites],
  );

  const refreshFavorites = useCallback(async () => {
    await fetchFavorites();
  }, [fetchFavorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        updateFavorite,
        removeFavorite,
        loading,
        error,
        refreshFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};