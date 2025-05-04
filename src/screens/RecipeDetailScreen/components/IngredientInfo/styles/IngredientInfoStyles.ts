import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ingredientsText: {
    marginTop: 130,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  noIngredientsText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  ingredientWrapper: {
    alignItems: 'center',
    marginRight: 15,
    width: 90,
    marginTop: 10,
  },
  imageIngredientContainer: {
    width: 80,
    height: 80,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginBottom: 5,
  },
  ingredientImage: {
    width: 60,
    height: 60,
  },
  ingredientText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 2,
    flexWrap: 'wrap',
    width: '100%',
  },
  ingredientDescription: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
});