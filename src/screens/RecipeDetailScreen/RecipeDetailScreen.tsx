import { Text, View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import RecipeInfo from '@/screens/RecipeDetailScreen/components/RecipeInfo/RecipeInfo';
import IngredientInfo from '@/screens/RecipeDetailScreen/components/IngredientInfo/IngredientInfo';
import StepsInfo from '@/screens/RecipeDetailScreen/components/StepsInfo/StepsInfo';
import { styles } from './styles/RecipeDetailScreenStyles';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  if (!recipe) {
    return <Text>Ошибка: рецепт не найден</Text>;
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <RecipeInfo recipe={recipe} />
        <IngredientInfo ingredients={recipe.ingredients} />
        <StepsInfo steps={recipe.steps} />
      </View>
    </ScrollView>
  );
}
