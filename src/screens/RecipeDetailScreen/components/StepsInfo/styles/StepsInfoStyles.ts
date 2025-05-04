import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  stepsTitleText: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#000000',
  },
  stepsContainer: {
    width: 368,
    height: 200,
    marginTop: 20,
    backgroundColor: '#F8EECB',
    elevation: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  stepNumber: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#FFAA00',
    fontWeight: '700',
  },
  stepText: {
    marginLeft: 40,
    fontFamily: 'Roboto',
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    width: 300,
    lineHeight: 20,
    flexWrap: 'wrap',
  },
  noStepsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});