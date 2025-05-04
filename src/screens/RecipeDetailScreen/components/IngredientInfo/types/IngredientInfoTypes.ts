export type IngredientInfoProps = {
  ingredients: Ingredient[];
};

interface Ingredient {
  name: string;
  amount: string;
  image?: string;
}