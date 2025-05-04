import { Animated, TouchableOpacity, View, ActivityIndicator, Text } from 'react-native';
import { Card } from 'react-native-paper';
import ScrollView = Animated.ScrollView;
import { styles } from '@/screens/MainScreen/components/SquareRecipes/styles/SquareRecipesStyles';
import { useEffect, useState } from 'react';
import { SpoonacularApi } from '@/services/spoonacularApi';
import { IFeaturedRecipe } from '@/screens/MainScreen/types/FeaturedRecipes';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';

type SquareRecipesProps = {
  onPressRecipe: (recipe: RecipeTypes) => void;
};

export default function SquareRecipes({ onPressRecipe }: SquareRecipesProps) {
  const [featuredRecipes, setFeaturedRecipes] = useState<IFeaturedRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await SpoonacularApi.getRandomRecipes(1);

        const recipes = await Promise.all(
          response.data.recipes.map(async (recipe: any) => {
            const details = await SpoonacularApi.getRecipeInfo(recipe.id);

            return {
              id: recipe.id.toString(),
              name: recipe.title,
              image: recipe.image,
              ingredients: recipe.extendedIngredients.map((ing: any) => ({
                name: ing.name,
                amount: `${ing.amount} ${ing.unit}`,
                image: `https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`
              })),
              steps: details.data.analyzedInstructions[0]?.steps.map((step: any) => step.step) || [],
              cookingTime: `${recipe.readyInMinutes} мин`,
              calories: `${Math.round(details.data.nutrition.nutrients.find((n: any) => n.name === 'Calories')?.amount || 0)} ккал`,
              isExternal: true,
            };
          })
        );

        setFeaturedRecipes(recipes);
      } catch (err) {
        setError('Не удалось загрузить рецепты');
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handlePress = (recipe: IFeaturedRecipe) => {
    const convertedRecipe: RecipeTypes = {
      ...recipe,
      id: parseInt(recipe.id) || 0,
    };
    onPressRecipe(convertedRecipe);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.imageContainerArea}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {featuredRecipes.map(recipe => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => handlePress(recipe)}
            activeOpacity={0.7}
          >
            <Card.Cover
              source={{ uri: recipe.image }}
              style={styles.imageContainer}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}