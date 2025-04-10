import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ingredientGroupContainer: {
    flexDirection: 'column',
  },
  textInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  newIngredientIcon: {
    marginHorizontal: 5,
  },
  divider: {
    backgroundColor: '#dcdcdc',
    marginTop: 5,
    width: '100%',
    height: 2,
  },
});