import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ScrollView = Animated.ScrollView;
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native-paper';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { MyRecipesTypesProps } from '@/components/MyReceipts/components/types/MyRecipesTypes';
import { MyRecipesCard } from '@/components/MyReceipts/components/MyRecipesCard/MyRecipesCard';
import { myRecipesStyles } from '@/components/MyReceipts/components/styles/MyRecipesStyles';

const MyReceipts: React.FC<MyRecipesTypesProps> = ({
  onPressRecipe,
  recipes,
  onDeleteRecipe,
}) => {
  const [fontsLoaded] = useFonts({
    Roboto: require('src/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf'),
  });

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleEditRecipe = (recipe: RecipeTypes) => {
    navigation.navigate('AddRecipeScreen', {
      recipeToEdit: recipe,
      isEditing: true,
    });
  };

  const handleDeleteRecipe = (recipeId: string) => {
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
          onPress: () => onDeleteRecipe(recipeId),
        },
      ],
    );
  };

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

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
                imageSource={{ uri: recipe.image }}
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

export default React.memo(MyReceipts);
