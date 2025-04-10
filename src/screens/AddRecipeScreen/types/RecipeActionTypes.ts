import { Ingredient } from '@/screens/AddRecipeScreen/types/IngredientTypes';
import { Recipe } from '@/screens/AddRecipeScreen/types/RecipeTypes';

export type RecipeAction =
  | { type: 'SET_RECIPE_NAME'; payload: string }
  | { type: 'SET_COOKING_TIME'; payload: string }
  | { type: 'SET_CALORIES'; payload: string }
  | { type: 'SET_INGREDIENTS'; payload: Ingredient[] }
  | { type: 'SET_STEPS'; payload: string[] }
  | { type: 'SET_IMAGE'; payload: string | null }
  | { type: 'RESET_STATE' }
  | { type: 'LOAD_RECIPE'; payload: Recipe };