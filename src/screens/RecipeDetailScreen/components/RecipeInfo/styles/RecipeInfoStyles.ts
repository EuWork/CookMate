import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({
  imageContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  image: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  iconHeartStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
  },
  iconBackStyle: {
    position: 'absolute',
  },
  iconMapStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 320,
    right: 5,
  },
  recipeInfo: {
    position: 'absolute',
    alignSelf: 'center',
    width: 350,
    height: 140,
    marginTop: 380,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 10,
  },
  recipeName: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  recipeIngredients: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
    marginTop: 5,
  },
  timeCaloriesContainer: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timeStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
  },
  map: {
    width: 200,
    height: 200,
  }
});
