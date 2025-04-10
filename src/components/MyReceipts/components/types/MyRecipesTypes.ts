import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type MyRecipesTypesProps = {
  onPressRecipe: (recipe: RecipeTypes) => void;
  recipes: RecipeTypes[];
  onDeleteRecipe: (recipeId: string) => void;
};