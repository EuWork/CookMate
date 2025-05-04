import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type FavoritesContextType = {
  favorites: RecipeTypes[];
  toggleFavorite: (recipe: RecipeTypes) => Promise<void>;
  isFavorite: (id: number | undefined) => boolean;
  updateFavorite: (updatedRecipe: RecipeTypes) => void;
  removeFavorite: (id: number) => Promise<void>;
  loading: boolean;
  error: string | null;
  refreshFavorites: () => Promise<void>;
};
