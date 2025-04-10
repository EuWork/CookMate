import { Recipe } from '@/screens/AddRecipeScreen/types/RecipeTypes';
import { RecipeAction } from '@/screens/AddRecipeScreen/types/RecipeActionTypes';

export const initialState: Recipe = {
  name: '',
  cookingTime: '',
  calories: '',
  ingredients: [],
  steps: [],
  image: null,
};

export function recipeReducer(state: Recipe, action: RecipeAction): Recipe {
  switch (action.type) {
    case 'SET_RECIPE_NAME':
      return { ...state, name: action.payload };
    case 'SET_COOKING_TIME':
      return { ...state, cookingTime: action.payload };
    case 'SET_CALORIES':
      return { ...state, calories: action.payload };
    case 'SET_INGREDIENTS':
      return { ...state, ingredients: action.payload };
    case 'SET_STEPS':
      return { ...state, steps: action.payload };
    case 'SET_IMAGE':
      return { ...state, image: action.payload };
    case 'LOAD_RECIPE':
      return { ...state, ...action.payload };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
}