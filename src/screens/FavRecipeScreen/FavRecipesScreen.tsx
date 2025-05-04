import { Animated, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/utils/Logo/Logo';
import Search from '@/components/Search/Search';
import FavRecipeCard from '@/screens/FavRecipeScreen/components/FavRecipeCard/FavRecipeCard';
import { useFavorites } from '@/hooks/useFavorites';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { styles } from '@/screens/FavRecipeScreen/styles/FavRecipesScreenStyles';
import { useState } from 'react';

export default function FavoriteReceiptsScreen() {
  const { favorites } = useFavorites();
  const [ recipes ] = useState<RecipeTypes[]>([]);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePressRecipe = (recipe: RecipeTypes) => {
    const fullRecipe = {
      ...recipe,
      ingredients: recipe.ingredients || [],
      steps: recipe.steps || []
    };
    navigation.navigate('RecipeDetailScreen', { recipe: fullRecipe });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search recipes={recipes}/>
        <Text style={styles.favTitle}>Избранное</Text>
        {favorites.length > 0 ? (
          favorites.map(recipe => (
            <FavRecipeCard
              key={recipe.id}
              recipe={recipe}
              onPress={() => handlePressRecipe(recipe)}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>Нет избранных рецептов</Text>
        )}
      </View>
    </ScrollView>
  );
}
