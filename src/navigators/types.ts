import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type RootStackParamList = {
  MainScreen: {
    newRecipe?: RecipeTypes;
    updatedRecipe?: RecipeTypes;
    deletedRecipeId?: string;
  };
  FavoriteReceiptsScreen: undefined;
  ReceiptDetailScreen: { recipe: any };
  AddRecipeScreen: {
    recipeToEdit?: RecipeTypes;
    isEditing?: boolean;
  };
};
