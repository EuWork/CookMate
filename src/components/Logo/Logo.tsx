import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Card } from 'react-native-paper';

export default function Logo() {
  const [fontsLoaded] = useFonts({
    Itim: require('src/assets/fonts/Itim-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Card style={styles.drawerItem}>
        <Text style={styles.drawerText}>CookMate</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
  },
  drawerItem: {
    backgroundColor: '#E391E9',
    width: 250,
    height: 50,
    position: 'relative',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  drawerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    fontFamily: 'Itim',
  },
});
