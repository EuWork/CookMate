import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';
import SquareReceipts from '@/screens/MainScreen/components/SquareReceipts/SquareReceipts';
import MyReceipts from '@/components/MyReceipts/MyReceipts';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigators/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;

const MainScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<MainScreenRouteProp>();
  const [recipes, setRecipes] = useState<RecipeTypes[]>([]);

  useEffect(() => {
    if (route.params?.newRecipe) {
      const newRecipe: RecipeTypes = route.params.newRecipe;
      setRecipes((prevRecipes) => {
        const exists = prevRecipes.some((r) => r.id === newRecipe.id);
        return exists ? prevRecipes : [...prevRecipes, newRecipe];
      });
    }
  }, [route.params?.newRecipe]);

  const handlePress = useCallback((recipe: RecipeTypes) => {
    if (!recipe) {
      console.error('Ошибка: recipe не передан');
      return;
    }
    navigation.navigate('ReceiptDetailScreen', { recipe });
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search />
        <SquareReceipts onPressRecipe={handlePress} />
        <MyReceipts onPressRecipe={handlePress} recipes={recipes} />
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});