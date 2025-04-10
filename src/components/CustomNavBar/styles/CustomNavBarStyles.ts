import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
    shadowColor: '#191919',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});