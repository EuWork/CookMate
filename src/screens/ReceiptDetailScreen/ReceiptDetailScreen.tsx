import { Text, StyleSheet, View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import RecipeInfo from '@/screens/ReceiptDetailScreen/components/RecipeInfo/RecipeInfo';
import IngredientInfo from '@/screens/ReceiptDetailScreen/components/IngredientInfo/IngredientInfo';
import StepsInfo from '@/screens/ReceiptDetailScreen/components/StepsInfo/StepsInfo';

export default function RecipeDetailScreen({ route }) {

  const { recipe } = route.params;

  if (!recipe) {
    return <Text>Ошибка: рецепт не найден</Text>;
  }

  // cocojamba

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <RecipeInfo />
        <IngredientInfo />
        <StepsInfo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 50,
  },
});
