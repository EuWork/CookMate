import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  settingTextStyle: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Roboto',
    color: '#555',
  },
  settingsChoice: {
    width: '100%',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  settingsChoiceText: {
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
  },
});