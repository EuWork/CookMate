import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

export type FavReceiptsCardProps = {
  recipe: RecipeTypes;
  onPress?: () => void;
};