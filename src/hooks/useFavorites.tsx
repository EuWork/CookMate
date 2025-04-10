import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

type FavoritesContextType = {
  favorites: RecipeTypes[];
  toggleFavorite: (recipe: RecipeTypes) => void;
  isFavorite: (id: string) => boolean;
  updateFavorite: (updatedRecipe: RecipeTypes) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  updateFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<RecipeTypes[]>([]);

  const toggleFavorite = useCallback((recipe: RecipeTypes) => {
    setFavorites(prev => {
      const isFavorite = prev.some(fav => fav.id === recipe.id);
      return isFavorite
        ? prev.filter(fav => fav.id !== recipe.id)
        : [...prev, recipe];
    });
  }, []);

  const updateFavorite = useCallback((updatedRecipe: RecipeTypes) => {
    setFavorites(prev =>
      prev.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe,
      ),
    );
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.filter(recipe => recipe.id !== id));
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.some(fav => fav.id === id);
    },
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        updateFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
