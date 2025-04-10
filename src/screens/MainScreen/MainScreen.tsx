import React, { useState, useEffect, useCallback, FC } from 'react';
import { View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/utils/Logo/Logo';
import Search from '@/components/Search/Search';
import SquareRecipes from '@/screens/MainScreen/components/SquareRecipes/SquareRecipes';
import MyReceipts from '@/components/MyReceipts/MyReceipts';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigators/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { useFavorites } from '@/hooks/useFavorites';
import { styles } from '@/screens/MainScreen/styles/MainScreenStyles';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;

export const MainScreen: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<MainScreenRouteProp>();
  const [recipes, setRecipes] = useState<RecipeTypes[]>([]);
  const { updateFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    if (route.params?.newRecipe) {
      const newRecipe = route.params.newRecipe;
      setRecipes(prev => [...prev, newRecipe]);
    }
    if (route.params?.updatedRecipe) {
      const updatedRecipe = route.params.updatedRecipe;
      setRecipes(prev =>
        prev.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r)),
      );
      updateFavorite(updatedRecipe);
    }
  }, [route.params]);

  const handleDeleteRecipe = useCallback((recipeId: string) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    removeFavorite(recipeId);
  }, []);

  const handlePress = useCallback(
    (recipe: RecipeTypes) => {
      if (!recipe) {
        console.error('Ошибка: recipe не передан');
        return;
      }
      navigation.navigate('ReceiptDetailScreen', { recipe });
    },
    [navigation],
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search />
        <SquareRecipes onPressRecipe={handlePress} />
        <MyReceipts
          onPressRecipe={handlePress}
          recipes={recipes}
          onDeleteRecipe={handleDeleteRecipe}
        />
      </View>
    </ScrollView>
  );
};
