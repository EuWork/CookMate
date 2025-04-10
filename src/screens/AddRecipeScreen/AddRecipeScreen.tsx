import { Alert, Animated, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/utils/Logo/Logo';
import { Button } from 'react-native-paper';
import RecipesInput from '@/screens/AddRecipeScreen/components/RecipeInput/RecipesInput';
import IngredientsGroupInput from '@/screens/AddRecipeScreen/components/IngredientsGroupInput/IngredientsGroupInput';
import Divider from '@/utils/Divider/Divider';
import AddReceiptDescription from '@/screens/AddRecipeScreen/components/AddRecipeDescription/AddReceiptDescription';
import AddReceiptImage from '@/screens/AddRecipeScreen/components/AddRecipeImage/AddReceiptImage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useMemo, useReducer } from 'react';
import { getIngredientData } from '@/utils/IngredientsMapping/IngredientsMapping';
import { initialState, recipeReducer } from '@/screens/AddRecipeScreen/components/RecipeReducer/RecipeReducer';
import { styles } from '@/screens/AddRecipeScreen/styles/AddRecipeScreenStyles';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddRecipeScreen'
>;
type AddReceiptScreenRouteProp = RouteProp<
  RootStackParamList,
  'AddRecipeScreen'
>;

export default function AddRecipeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<AddReceiptScreenRouteProp>();

  const { recipeToEdit, isEditing } = route.params || {};

  const [state, dispatch] = useReducer(recipeReducer, {
    ...initialState,
    ...(isEditing && recipeToEdit ? recipeToEdit : {}),
  });

  const isFormValid = useMemo(() => {
    return (
      state.name.trim() !== '' &&
      state.cookingTime.trim() !== '' &&
      state.calories.trim() !== '' &&
      state.ingredients.length >= 3 &&
      state.ingredients.every(
        ing => ing.name.trim() !== '' && ing.amount.trim() !== '',
      ) &&
      state.steps.every(step => step.trim() !== '') &&
      state.image !== null
    );
  }, [state]);

  const handleCreateRecipe = useCallback(() => {
    if (!isFormValid) {
      Alert.alert(
        'Не все данные заполнены',
        'Пожалуйста, заполните все поля, добавьте минимум 3 ингредиента, шаги приготовления и прикрепите фото',
        [{ text: 'OK' }],
      );
      return;
    }

    const recipeData = {
      ...state,
      ingredients: state.ingredients.map(ing => ({
        ...ing,
        ...getIngredientData(ing.name),
      })),
      ...(!isEditing && {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      }),
    };

    navigation.navigate('MainScreen', {
      [isEditing ? 'updatedRecipe' : 'newRecipe']: recipeData,
    });
  }, [isFormValid, state, isEditing, navigation]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Logo />
        <AddReceiptImage
          image={state.image}
          setImage={uri => dispatch({type: 'SET_IMAGE', payload: uri})}
          name={state.name}
          setName={name => dispatch({type: 'SET_RECIPE_NAME', payload: name})}
        />
        <Text style={styles.textInfo}>Время готовки</Text>
        <RecipesInput
          placeholder="Введите время готовки"
          onChangeText={time => dispatch({type: 'SET_COOKING_TIME', payload: time})}
        />
        <Divider />
        <Text style={styles.textInfo}>Количество калорий</Text>
        <RecipesInput
          placeholder="Введите количество калорий"
          onChangeText={cals => dispatch({type: 'SET_CALORIES', payload: cals})}
        />
        <Divider />
        <IngredientsGroupInput
          addIngredients={state.ingredients}
          setAddIngredients={ings => dispatch({type: 'SET_INGREDIENTS', payload: ings})}
        />
        <AddReceiptDescription addSteps={state.steps} setAddSteps={steps => dispatch({type: 'SET_STEPS', payload: steps})} />
        <Button
          mode="contained"
          buttonColor="#E391E9"
          style={styles.addButton}
          labelStyle={styles.buttonText}
          onPress={handleCreateRecipe}
        >
          {isEditing ? 'Редактировать' : 'Создать рецепт'}
        </Button>
      </View>
    </ScrollView>
  );
}
