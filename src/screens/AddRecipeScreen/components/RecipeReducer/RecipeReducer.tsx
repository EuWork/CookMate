type Recipe = {
  id?: number;
  name: string;
  cookingTime: string;
  calories: string;
  ingredients: Array<{ name: string; amount: string }>;
  steps: string[];
  image: string | null;
};

type RecipeAction =
  | { type: 'SET_RECIPE_NAME'; payload: string }
  | { type: 'SET_COOKING_TIME'; payload: string }
  | { type: 'SET_CALORIES'; payload: string }
  | { type: 'SET_INGREDIENTS'; payload: Array<{ name: string; amount: string }> }
  | { type: 'SET_STEPS'; payload: string[] }
  | { type: 'SET_IMAGE'; payload: string | null }
  | { type: 'INIT_STATE'; payload: Recipe };

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
    case 'INIT_STATE':
      return {
        ...action.payload,
        ingredients: Array.isArray(action.payload.ingredients)
          ? action.payload.ingredients
          : [],
        steps: Array.isArray(action.payload.steps)
          ? action.payload.steps
          : []
      };
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
    default:
      return state;
  }
}