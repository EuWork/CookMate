import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 100,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  favTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'Roboto',
    fontWeight: '800',
    marginTop: 20,
    fontSize: 26,
    marginLeft: 30,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: '#747474',
  },
});