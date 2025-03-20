import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function SettingScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.settingTextStyle}>Справка и обратная связь</Text>
      <View style={styles.settingsChoice}>
        <Text style={styles.settingsChoiceText}>Связь с разработчиками</Text>
        <IconButton icon="chevron-right" size={30}/>
      </View>
      <View style={styles.settingsChoice}>
        <Text style={styles.settingsChoiceText}>О приложении</Text>
        <IconButton icon="chevron-right" size={30}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  settingTextStyle: {
    position: 'relative',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'light',
    fontFamily: 'Roboto',
  },
  settingsChoice: {
    width: '100%',
    height: 53,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  settingsChoiceText: {
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
  },
});
