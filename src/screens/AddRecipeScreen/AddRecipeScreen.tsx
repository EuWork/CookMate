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
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { initialState, recipeReducer } from '@/screens/AddRecipeScreen/components/RecipeReducer/RecipeReducer';
import { styles } from '@/screens/AddRecipeScreen/styles/AddRecipeScreenStyles';
import { RecipesApi } from '@/services/api';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

type NavigationProp = StackNavigationProp<RootStackParamList, 'AddRecipeScreen'>;
type AddReceiptScreenRouteProp = RouteProp<RootStackParamList, 'AddRecipeScreen'>;

const normalizeRecipeData = (recipe: RecipeTypes) => {
  return {
    ...recipe,
    ingredients: Array.isArray(recipe.ingredients)
      ? recipe.ingredients
      : typeof recipe.ingredients === 'string'
        ? JSON.parse(recipe.ingredients)
        : [],
    steps: Array.isArray(recipe.steps)
      ? recipe.steps
      : typeof recipe.steps === 'string'
        ? JSON.parse(recipe.steps)
        : []
  };
};

export default function AddRecipeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<AddReceiptScreenRouteProp>();
  const { recipeToEdit, isEditing } = route.params || {};
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  useEffect(() => {
    if (isEditing && recipeToEdit) {
      dispatch({ type: 'INIT_STATE', payload: normalizeRecipeData(recipeToEdit) });
    }
  }, [isEditing, recipeToEdit]);

  const isFormValid = useMemo(() => (
    state.name.trim() !== '' &&
    state.cookingTime.trim() !== '' &&
    state.calories.trim() !== '' &&
    state.ingredients.length >= 3 &&
    state.ingredients.every(ing => ing.name.trim() !== '' && ing.amount.trim() !== '') &&
    state.steps.every(step => step.trim() !== '') &&
    state.image !== null
  ), [state]);

  const handleSaveRecipe = useCallback(async () => {
    if (!isFormValid) {
      Alert.alert(
        'Не все данные заполнены',
        'Пожалуйста, заполните все поля, добавьте минимум 3 ингредиента, шаги приготовления и прикрепите фото',
        [{ text: 'OK' }],
      );
      return;
    }

    const recipeData: RecipeTypes = {
      id: 0,
      name: state.name,
      cookingTime: state.cookingTime,
      calories: state.calories,
      image: state.image!,
      ingredients: state.ingredients,
      steps: state.steps,
      ...(isEditing && recipeToEdit && { id: recipeToEdit.id })
    };

    try {
      const apiCall = isEditing && recipeToEdit
        ? await RecipesApi.UpdateRecipe(recipeData)
        : await RecipesApi.CreateRecipe(recipeData);
      const [response] = await Promise.all([apiCall]);

      navigation.navigate('MainScreen', {
        refresh: true,
        ...(isEditing
            ? { updatedRecipe: response.data }
            : { newRecipe: response.data }
        )
      });
    } catch (error) {
      console.error("Error saving recipe:", error);
      Alert.alert(
        "Ошибка",
        isEditing ? "Не удалось обновить рецепт" : "Не удалось создать рецепт"
      );
    }
  }, [isFormValid, state, isEditing, recipeToEdit, navigation]);

  const handlers = useMemo(() => ({
    setImage: (uri: string) => dispatch({ type: 'SET_IMAGE', payload: uri }),
    setName: (name: string) => dispatch({ type: 'SET_RECIPE_NAME', payload: name }),
    setCookingTime: (time: string) => dispatch({ type: 'SET_COOKING_TIME', payload: time }),
    setCalories: (cals: string) => dispatch({ type: 'SET_CALORIES', payload: cals }),
    setIngredients: (ings: any[]) => dispatch({ type: 'SET_INGREDIENTS', payload: ings }),
    setSteps: (steps: string[]) => dispatch({ type: 'SET_STEPS', payload: steps }),
  }), []);

  return (
    <ScrollView
      style={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Logo />
        <AddReceiptImage
          image={state.image}
          setImage={handlers.setImage}
          name={state.name}
          setName={handlers.setName}
        />

        <Text style={styles.textInfo}>Время готовки</Text>
        <RecipesInput
          placeholder="Введите время готовки"
          onChangeText={handlers.setCookingTime}
        />
        <Divider />

        <Text style={styles.textInfo}>Количество калорий</Text>
        <RecipesInput
          placeholder="Введите количество калорий"
          onChangeText={handlers.setCalories}
        />
        <Divider />

        <IngredientsGroupInput
          addIngredients={state.ingredients}
          setAddIngredients={handlers.setIngredients}
        />

        <AddReceiptDescription
          addSteps={state.steps}
          setAddSteps={handlers.setSteps}
        />

        <Button
          mode="contained"
          buttonColor="#E391E9"
          style={styles.addButton}
          labelStyle={styles.buttonText}
          onPress={handleSaveRecipe}
        >
          {isEditing ? 'Сохранить изменения' : 'Создать рецепт'}
        </Button>
      </View>
    </ScrollView>
  );
}
