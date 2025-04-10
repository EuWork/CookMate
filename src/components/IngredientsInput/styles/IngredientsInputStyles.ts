import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ingredientContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ingredientName: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: 220,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
  ingredientNumber: {
    position: 'relative',
    marginLeft: 20,
    backgroundColor: '#ffffff',
    width: 120,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
});