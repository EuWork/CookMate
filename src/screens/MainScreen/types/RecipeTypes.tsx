export type RecipeTypes = {
  id: number;
  name: string;
  cookingTime: string;
  calories: string;
  image: string | null;
  ingredients: Array<{ name: string; amount: string }>;
  steps: string[];
  createdAt?: string;
  isFavorite?: boolean;
  isExternal?: boolean;
};
