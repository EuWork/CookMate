import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type MyRecipesTypesProps = {
  onPressRecipe: (recipe: RecipeTypes) => void,
  recipes: RecipeTypes[],
  onDeleteRecipe: (recipeId: number) => void,
  onRecipeUpdate?: (updatedRecipe: RecipeTypes) => void
};