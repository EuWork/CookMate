import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type RootStackParamList = {
  MainScreen: {
    newRecipe?: RecipeTypes;
    updatedRecipe?: RecipeTypes;
    deletedRecipeId?: string;
    refresh?: boolean;
  };
  FavoriteReceiptsScreen: undefined;
  RecipeDetailScreen: { recipe: any };
  AddRecipeScreen: {
    recipeToEdit?: RecipeTypes;
    isEditing?: boolean;
  };
  MapScreen: undefined;
};
