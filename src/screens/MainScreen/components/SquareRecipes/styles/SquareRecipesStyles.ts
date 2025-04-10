import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  imageContainerArea: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    height: 65,
    marginTop: 30,
  },
  imageContainer: {
    backgroundColor: '#E391E9',
    width: 75,
    height: 65,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
  },
});