import { Text, View, StyleSheet, Animated, TouchableOpacity, Alert } from 'react-native';
import ScrollView = Animated.ScrollView;
import { useFonts } from 'expo-font';
import MyReceiptsCard from '@/components/MyReceipts/components/MyReceiptsCard/MyReceiptsCard';
import { ActivityIndicator } from 'react-native-paper';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';

type MyReceiptsProps = {
  onPressRecipe: (recipe: RecipeTypes) => void;
  recipes: RecipeTypes[];
  onDeleteRecipe: (recipeId: string) => void;
};

const MyReceipts: React.FC<MyReceiptsProps> = ({ onPressRecipe, recipes, onDeleteRecipe }) => {
  const [fontsLoaded] = useFonts({
    Roboto: require('src/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleEditRecipe = (recipe: RecipeTypes) => {
    navigation.navigate('AddReceiptScreen', {
      recipeToEdit: recipe,
      isEditing: true
    });
  };

  const handleDeleteRecipe = (recipeId: string) => {
    Alert.alert(
      'Удалить рецепт',
      'Вы уверены, что хотите удалить этот рецепт?',
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => onDeleteRecipe(recipeId)
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.myRecipesTitle}>Мои рецепты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContentContainer}
        snapToAlignment="start"
      >
        {recipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeContainer}>
            <TouchableOpacity onPress={() => onPressRecipe(recipe)}>
              <MyReceiptsCard
                imageSource={{ uri: recipe.image }}
                title={recipe.name}
                info={`${recipe.ingredients.length} ингредиентов ● ${recipe.cookingTime}`}
                onEdit={() => handleEditRecipe(recipe)}
                onDelete={() => handleDeleteRecipe(recipe.id)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default React.memo(MyReceipts);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 20,
  },
  myRecipesTitle: {
    marginTop: 10,
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  scrollContentContainer: {
    paddingRight: 15,
  },
  recipeContainer: {
    marginRight: 15,
  },
  emptyContainer: {
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#747474',
  },
});