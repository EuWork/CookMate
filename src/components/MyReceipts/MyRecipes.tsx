import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ScrollView = Animated.ScrollView;
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { MyRecipesTypesProps } from '@/components/MyReceipts/components/types/MyRecipesTypes';
import { MyRecipesCard } from '@/components/MyReceipts/components/MyRecipesCard/MyRecipesCard';
import { myRecipesStyles } from '@/components/MyReceipts/components/styles/MyRecipesStyles';

const MyRecipes: React.FC<MyRecipesTypesProps> = ({
                                                    onPressRecipe,
                                                    recipes,
                                                    onDeleteRecipe
                                                  }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleEditRecipe = (recipe: RecipeTypes) => {
    if (!navigation) {
      console.error('Navigation is not available');
      return;
    }

    navigation.navigate('AddRecipeScreen', {
      recipeToEdit: {
        ...recipe,
        ingredients: Array.isArray(recipe.ingredients)
          ? recipe.ingredients
          : [],
        steps: Array.isArray(recipe.steps)
          ? recipe.steps
          : []
      },
      isEditing: true
    });
  };

  const handleDeleteRecipe = async (recipeId: number) => {
    Alert.alert(
      'Удалить рецепт',
      'Вы уверены, что хотите удалить этот рецепт?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: async () => {
            try {
              onDeleteRecipe(recipeId);
            } catch (error) {
              console.error('Error deleting recipe:', error);
              Alert.alert('Ошибка', 'Не удалось удалить рецепт');
            }
          },
        },
      ],
    );
  };

  return (
    <View style={myRecipesStyles.container}>
      <Text style={myRecipesStyles.myRecipesTitle}>Мои рецепты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={myRecipesStyles.scrollContentContainer}
        snapToAlignment="start"
      >
        {recipes.map(recipe => (
          <View key={recipe.id} style={myRecipesStyles.recipeContainer}>
            <TouchableOpacity onPress={() => onPressRecipe(recipe)}>
              <MyRecipesCard
                imageSource={{ uri: recipe.image! }}
                title={recipe.name}
                info={`${recipe.ingredients.length} ингредиентов ● ${recipe.cookingTime}`}
                onEdit={() => handleEditRecipe(recipe)}
                onDelete={() => handleDeleteRecipe(recipe.id)}
                recipe={recipe}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default React.memo(MyRecipes);
