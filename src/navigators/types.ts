import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type RootStackParamList = {
  MainScreen: {
    newRecipe?: RecipeTypes;
    updatedRecipe?: RecipeTypes;
    deletedRecipeId?: string;
  };
  ReceiptDetailScreen: { recipe: any };
  AddReceiptScreen: {
    recipeToEdit?: RecipeTypes;
    isEditing?: boolean;
  };
};