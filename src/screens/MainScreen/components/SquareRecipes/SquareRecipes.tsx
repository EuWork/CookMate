import { Animated, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import ScrollView = Animated.ScrollView;
import { featuredRecipes } from '@/screens/MainScreen/components/FeaturedRecipe/FeaturedRecipes';
import { styles } from '@/screens/MainScreen/components/SquareRecipes/styles/SquareRecipesStyles';

type SquareReceiptsProps = {
  onPressRecipe: (recipe: any) => void;
};

export default function SquareRecipes({ onPressRecipe }: SquareReceiptsProps) {
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
            onPress={() => onPressRecipe(recipe)}
            activeOpacity={0.7}
          >
            <Card.Cover
              source={
                typeof recipe.image === 'number'
                  ? recipe.image
                  : { uri: recipe.image }
              }
              style={styles.imageContainer}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
