import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from './styles/LogoStyles';

export default function Logo() {

  return (
    <View>
      <Card style={styles.drawerItem}>
        <Text style={styles.drawerText}>CookMate</Text>
      </Card>
    </View>
  );
}
