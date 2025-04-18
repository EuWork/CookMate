import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    marginHorizontal: 10,
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
  noIngredientsText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});