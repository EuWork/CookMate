import { Ingredient } from '@/screens/AddRecipeScreen/types/IngredientTypes';

export type Recipe = {
  id?: string;
  name: string;
  cookingTime: string;
  calories: string;
  ingredients: Ingredient[];
  steps: string[];
  image: string | null;
  createdAt?: string;
};