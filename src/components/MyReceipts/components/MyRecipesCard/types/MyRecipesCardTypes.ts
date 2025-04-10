import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type MyRecipesCardTypesProps = {
  recipe: RecipeTypes;
  imageSource: { uri: string };
  title: string;
  info: string;
  onEdit: () => void;
  onDelete: () => void;
};