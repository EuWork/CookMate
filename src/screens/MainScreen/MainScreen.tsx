import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, Animated, View } from 'react-native';
import Logo from '@/utils/Logo/Logo';
import Search from '@/components/Search/Search';
import SquareRecipes from '@/screens/MainScreen/components/SquareRecipes/SquareRecipes';
import MyReceipts from '@/components/MyReceipts/MyRecipes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigators/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { styles } from '@/screens/MainScreen/styles/MainScreenStyles';
import { RecipesApi } from '@/services/api';
import { useFavorites } from '@/hooks/useFavorites';
import ScrollView = Animated.ScrollView;

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;

export const MainScreen: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<MainScreenRouteProp>();
  const [recipes, setRecipes] = useState<RecipeTypes[]>([]);
  const [, setIsRefreshing] = useState(false);
  const { updateFavorite } = useFavorites();

  const loadRecipes = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const response = await RecipesApi.GetRecipes();
      const serverRecipes = response.data.map(recipe => ({
        ...recipe,
        id: recipe.id,
      }));
      setRecipes(serverRecipes);
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (route.params?.updatedRecipe) {
        const { updatedRecipe } = route.params;
        setRecipes(prev =>
          prev.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
        );
        updateFavorite(updatedRecipe);
      }
    });
  }, [navigation, route.params, updateFavorite]);

  useEffect(() => {
    if (route.params?.refresh) {
      loadRecipes().catch(console.error);
    }
    if (route.params?.newRecipe) {
      const { newRecipe } = route.params;
      if (newRecipe) {
        setRecipes(prev => [...prev, newRecipe]);
      }
    }
  }, [route.params, loadRecipes]);

  const handleDeleteRecipe = useCallback(async (recipeId: number) => {
    try {
      await RecipesApi.DeleteRecipe(recipeId);
      setRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    } catch (error) {
      console.error('Error deleting recipe:', error);
      Alert.alert(
        'Ошибка',
      );
      throw error;
    }
  }, []);

  const handleRecipeUpdated = useCallback((updatedRecipe: RecipeTypes) => {
    setRecipes(prev => prev.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ));
  }, []);

  const handlePress = useCallback((recipe: RecipeTypes) => {
    if (!recipe) return;
    navigation.navigate('RecipeDetailScreen', { recipe });
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search recipes={recipes}/>
        <SquareRecipes onPressRecipe={handlePress} />
        <MyReceipts
          onPressRecipe={handlePress}
          recipes={recipes}
          onDeleteRecipe={handleDeleteRecipe}
          onRecipeUpdate={handleRecipeUpdated}
        />
      </View>
    </ScrollView>
  );
};
