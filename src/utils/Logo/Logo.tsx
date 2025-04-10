import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Card } from 'react-native-paper';
import { styles } from './styles/LogoStyles';

export default function Logo() {
  const [fontsLoaded] = useFonts({
    Itim: require('@/assets/fonts/Itim-Regular.ttf'),
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
