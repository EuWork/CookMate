import { Ingredient } from '@/screens/AddRecipeScreen/components/IngredientsGroupInput/types/IngredientTypes';

export type IngredientsGroupInputProps = {
  addIngredients: Ingredient[];
  setAddIngredients: (ingredients: Ingredient[]) => void;
};