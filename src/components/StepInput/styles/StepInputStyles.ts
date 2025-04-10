import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    width: '100%',
    minHeight: 40,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 7,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});