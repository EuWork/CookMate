import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 100,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  addButton: {
    justifyContent: 'center',
    width: 200,
    height: 50,
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});