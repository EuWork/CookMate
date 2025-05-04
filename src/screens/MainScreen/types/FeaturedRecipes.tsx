export interface IFeaturedRecipe {
  id: string;
  name: string;
  image: string;
  ingredients: Array<{ name: string; amount: string }>;
  steps: string[];
  cookingTime: string;
  calories: string;
}
