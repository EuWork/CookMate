import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import Divider from '@/components/Divider/Divider';
import ReceiptInput from '@/screens/AddReceiptScreen/components/ReceiptInput/ReceiptInput';

export default function AddReceiptImage() {
  return (
    <View style={styles.container}>
      <Text style={styles.addReceiptTitle}>Создать свой рецепт</Text>
      <ReceiptInput placeholder="Название рецепта" />
      <View style={styles.iconContainer}>
        <IconButton
          icon="plus-box-outline"
          size={250}
          style={styles.icon}
          iconColor="#E391E9"
        />
        <Text style={styles.addText}>Прикрепите фото</Text>
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  addReceiptTitle: {
    position: 'relative',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 26,
    marginTop: 20,
  },
  iconContainer: {
    marginTop: 20,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
  },
  icon: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: 250,
    height: 250,
  },
  addText: {
    position: 'relative',
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});
