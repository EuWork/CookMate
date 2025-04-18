import { StyleSheet } from 'react-native';

export const myRecipesCardStyles = StyleSheet.create({
  cardWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  cardComponent: {
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
  },
  imageReceipt: {
    width: 205,
    height: 359,
  },
  foodName: {
    width: 205,
    color: '#000000',
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  foodInfo: {
    color: '#747474',
    width: 205,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconMenuPosition: {
    left: 60,
    bottom: 10,
  },
  iconHeartPosition: {
    top: 310,
  },
  iconsContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
  },
});