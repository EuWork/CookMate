import { Text, View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import RecipeInfo from '@/screens/RecipeDetailScreen/components/RecipeInfo/RecipeInfo';
import IngredientInfo from '@/screens/RecipeDetailScreen/components/IngredientInfo/IngredientInfo';
import StepsInfo from '@/screens/RecipeDetailScreen/components/StepsInfo/StepsInfo';
import { styles } from './styles/RecipeDetailScreenStyles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigators/types.ts';

type RecipeDetailScreenProp = RouteProp<RootStackParamList, 'RecipeDetailScreen'>

export default function RecipeDetailScreen() {

  const route = useRoute<RecipeDetailScreenProp>();

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
