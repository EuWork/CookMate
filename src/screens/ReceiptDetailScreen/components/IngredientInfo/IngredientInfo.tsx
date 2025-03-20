import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function IngredientInfo() {

  const ingredients = [
    { name: 'Сыр', color: '#FFD700', description: '200 грамм' },
    { name: 'Помидор', color: '#FF6347', description: '2 штуки' },
    { name: 'Салат', color: '#32CD32', description: '200 грамм' },
    { name: 'Мясо', color: '#8B4513', description: '800 грамм' },
  ];

  return(
    <View>
      <Text style={styles.ingredientsText}>
        Ингредиенты
      </Text>
      <View style={styles.imageContainerArea}>
        {ingredients.map((item, index) => (
          <View key={index} style={styles.ingredientWrapper}>
            <Card.Cover
              style={[styles.imageIngredientContainer, { backgroundColor: item.color }]} // Установка цвета
              resizeMode="cover"
            />
            <Text style={styles.ingredientText}>{item.name}</Text>
            <Text style={styles.ingredientDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  )
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
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 65,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageIngredientContainer: {
    backgroundColor: '#E391E9',
    width: 85,
    height: 75,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
  },
  ingredientWrapper: {
    alignItems: 'flex-start',
  },
  ingredientText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: '#000000',
  },
  ingredientDescription: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
  },
})