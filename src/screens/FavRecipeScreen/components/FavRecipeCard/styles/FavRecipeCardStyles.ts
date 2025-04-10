import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardComponent: {
    position: 'relative',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  imageReceipt: {
    width: 360,
    height: 450,
  },
  foodName: {
    position: 'relative',
    alignSelf: 'center',
    color: '#000000',
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  foodInfo: {
    position: 'relative',
    color: '#747474',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconHearStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 400,
  },
});