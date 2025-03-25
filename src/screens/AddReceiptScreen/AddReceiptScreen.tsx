import { Alert, Animated, StyleSheet, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/components/Logo/Logo';
import { Button } from 'react-native-paper';
import ReceiptInput from '@/screens/AddReceiptScreen/components/ReceiptInput/ReceiptInput';
import IngredientsGroupInput from '@/screens/AddReceiptScreen/components/IngredientsGroupInput/IngredientsGroupInput';
import Divider from '@/components/Divider/Divider';
import AddReceiptDescription from '@/screens/AddReceiptScreen/components/AddReceiptDescription/AddReceiptDescription';
import AddReceiptImage from '@/screens/AddReceiptScreen/components/AddReceiptImage/AddReceiptImage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { getIngredientData } from '@/utils/IngredientsMapping';

type NavigationProp = StackNavigationProp<RootStackParamList, 'AddReceiptScreen'>;

export default function AddReceiptScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [recipeName, setRecipeName] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [calories, setCalories] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const isFormValid = useMemo(() => {
    return (
      recipeName.trim() !== '' &&
      cookingTime.trim() !== '' &&
      calories.trim() !== '' &&
      ingredients.length >= 3 &&
      ingredients.every(ing => ing.name.trim() !== '' && ing.amount.trim() !== '') &&
      steps.every(step => step.trim() !== '') &&
      image !== null
    );
  }, [recipeName, cookingTime, calories, ingredients, steps, image]);

  const handleCreateRecipe = useCallback(() => {
    if (!isFormValid) {
      Alert.alert(
        'Не все данные заполнены',
        'Пожалуйста, заполните все поля, добавьте минимум 3 ингредиента, шаги приготовления и прикрепите фото',
        [{ text: 'OK' }]
      );
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name: recipeName,
      cookingTime,
      calories,
      ingredients: ingredients.map(ing => ({
        ...ing,
        ... getIngredientData(ing.name),
      })),
      steps,
      image,
      createdAt: new Date().toISOString(),
    };

    navigation.navigate('MainScreen', { newRecipe });
  }, [isFormValid, recipeName, cookingTime, calories, ingredients, steps, image, navigation]);

  return (
    <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Logo />
        <AddReceiptImage image={image} setImage={setImage} name={recipeName} setName={setRecipeName}/>
        <Text style={styles.textInfo}>Время готовки</Text>
        <ReceiptInput placeholder="Введите время готовки" onChangeText={setCookingTime} />
        <Divider />
        <Text style={styles.textInfo}>Количество калорий</Text>
        <ReceiptInput placeholder="Введите количество калорий" onChangeText={setCalories} />
        <Divider />
        <IngredientsGroupInput addIngredients={ingredients} setAddIngredients={setIngredients}/>
        <AddReceiptDescription addSteps={steps} setAddSteps={setSteps}/>
        <Button
          mode="contained"
          buttonColor="#E391E9"
          style={styles.addButton}
          labelStyle={styles.buttonText}
          onPress={handleCreateRecipe}
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
