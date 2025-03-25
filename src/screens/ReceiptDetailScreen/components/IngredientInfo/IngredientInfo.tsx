import { Text, View, StyleSheet, Image } from 'react-native';
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
      <View style={styles.imageContainerArea}>
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
      </View>
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
  imageContainerArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageIngredientContainer: {
    width: 85,
    height: 75,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientImage: {
    width: 60,
    height: 60,
  },
  ingredientWrapper: {
    alignItems: 'center',
    marginBottom: 15,
    width: '30%',
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