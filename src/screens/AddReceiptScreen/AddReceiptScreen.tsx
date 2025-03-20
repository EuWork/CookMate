import { Animated, StyleSheet, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/components/Logo/Logo';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Button } from 'react-native-paper';
import ReceiptInput from '@/screens/AddReceiptScreen/components/ReceiptInput/ReceiptInput';
import IngredientsGroupInput from '@/screens/AddReceiptScreen/components/IngredientsGroupInput/IngredientsGroupInput';
import Divider from '@/components/Divider/Divider';
import AddReceiptDescription from '@/screens/AddReceiptScreen/components/AddReceiptDescription/AddReceiptDescription';
import AddReceiptImage from '@/screens/AddReceiptScreen/components/AddReceiptImage/AddReceiptImage';

export default function AddReceiptScreen() {
  const [fontsLoaded] = useFonts({
    Roboto: require('src/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <AddReceiptImage />
        <Text style={styles.textInfo}>Время готовки</Text>
        <ReceiptInput placeholder="Введите время готовки" />
        <Divider />
        <Text style={styles.textInfo}>Количество калорий</Text>
        <ReceiptInput placeholder="Введите количество калорий" />
        <Divider />
        <IngredientsGroupInput />
        <AddReceiptDescription />
        <Button
          mode="contained"
          buttonColor="#E391E9"
          style={styles.addButton}
          labelStyle={styles.buttonText}
        >
          Создать рецепт
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 100,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  addButton: {
    justifyContent: 'center',
    width: 200,
    height: 50,
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});
