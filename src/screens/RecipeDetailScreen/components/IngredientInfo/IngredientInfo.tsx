import { Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { IngredientInfoProps } from '@/screens/RecipeDetailScreen/components/IngredientInfo/types/IngredientInfoTypes';
import { styles } from './styles/IngredientInfoStyles';

export default function IngredientInfo({ ingredients }: IngredientInfoProps) {
  if (!ingredients || !Array.isArray(ingredients)) {
    return (
      <View>
        <Text style={styles.ingredientsText}>Ингредиенты</Text>
        <Text style={styles.noIngredientsText}>Нет данных об ингредиентах</Text>
      </View>
    );
  }

  if (ingredients.length === 0) {
    return (
      <View>
        <Text style={styles.ingredientsText}>Ингредиенты</Text>
        <Text style={styles.noIngredientsText}>Ингредиенты не указаны</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.ingredientsText}>Ингредиенты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {ingredients.map((item, index) => {
          const imageSource = item.image
            ? { uri: item.image }
            : require('@/assets/ingredients/default.png');

          return (
            <View key={index} style={styles.ingredientWrapper}>
              <Card style={styles.imageIngredientContainer}>
                <Image
                  source={imageSource}
                  style={styles.ingredientImage}
                  resizeMode="contain"
                />
              </Card>
              <Text style={styles.ingredientText}>{item.name}</Text>
              <Text style={styles.ingredientDescription}>{item.amount}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}