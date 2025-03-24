import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type RootStackParamList = {
  MainScreen: { newRecipe?: RecipeTypes };
  ReceiptDetailScreen: { recipe: any };
  AddReceiptScreen: undefined;
};