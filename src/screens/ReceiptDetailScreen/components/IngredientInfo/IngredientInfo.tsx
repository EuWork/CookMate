import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { getIngredientData } from '@/utils/IngredientsMapping';

type IngredientInfoProps = {
  ingredients: Array<{
    name: string;
    amount: string;
  }>;
};

export default function IngredientInfo({ ingredients }: IngredientInfoProps) {
  return (
    <View>
      <Text style={styles.ingredientsText}>Ингредиенты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {ingredients.map((item, index) => {
          const { color, image } = getIngredientData(item.name);

          return (
            <View key={index} style={styles.ingredientWrapper}>
              <Card style={[styles.imageIngredientContainer, { backgroundColor: color }]}>
                <Image
                  source={image}
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

const styles = StyleSheet.create({
  ingredientsText: {
    marginTop: 130,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  imageIngredientContainer: {
    width: 85,
    height: 75,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10, // Увеличил отступ между элементами
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientImage: {
    width: 60,
    height: 60,
  },
  ingredientWrapper: {
    alignItems: 'center',
    marginRight: 15,
    width: 100,
  },
  ingredientText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  ingredientDescription: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
    textAlign: 'center',
  },
});