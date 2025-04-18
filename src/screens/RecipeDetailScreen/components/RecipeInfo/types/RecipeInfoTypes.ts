export type RecipeInfoProps = {
  recipe: {
    id: number;
    name: string;
    cookingTime: string;
    calories: string;
    ingredients: Array<{ name: string; amount: string }>;
    image: string | null;
    steps: any[];
  };
};