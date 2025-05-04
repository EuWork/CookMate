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
  loadingContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  emptyContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: 'gray',
    textAlign: 'center',
  },
});