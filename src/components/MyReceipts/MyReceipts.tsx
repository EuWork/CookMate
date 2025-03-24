import { Text, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import ScrollView = Animated.ScrollView;
import { useFonts } from 'expo-font';
import MyReceiptsCard from '@/components/MyReceipts/components/MyReceiptsCard/MyReceiptsCard';
import { ActivityIndicator } from 'react-native-paper';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import React from 'react';

type MyReceiptsProps = {
  onPressRecipe: (recipe: RecipeTypes) => void;
  recipes: RecipeTypes[];
};

const MyReceipts: React.FC<MyReceiptsProps> = ({ onPressRecipe, recipes }) => {
  const [fontsLoaded] = useFonts({
    Roboto: require('src/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text style={styles.myRecipesTitle}>Мои рецепты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        snapToAlignment="start"
      >
        {recipes.map((recipe) => (
          <TouchableOpacity key={recipe.id} onPress={() => onPressRecipe(recipe)}>
            <MyReceiptsCard
              imageSource={{ uri: recipe.image }}
              title={recipe.name}
              info={`${recipe.ingredients.length} ингредиентов ● ${recipe.cookingTime}`}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default React.memo(MyReceipts);

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  myRecipesTitle: {
    position: 'relative',
    marginTop: 30,
    width: 340,
    alignSelf: 'flex-start',
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: '800',
    marginLeft: 30,
  },
});