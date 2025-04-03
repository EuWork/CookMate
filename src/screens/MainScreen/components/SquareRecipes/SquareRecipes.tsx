import { Animated, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ScrollView = Animated.ScrollView;
import { featuredRecipes } from '@/screens/MainScreen/components/FeaturedRecipe/FeaturedRecipes';

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
        {featuredRecipes.map((recipe) => (
          <TouchableOpacity key={recipe.id} onPress={() => onPressRecipe(recipe)} activeOpacity={0.7}>
            <Card.Cover source={typeof recipe.image === 'number' ? recipe.image : { uri: recipe.image }} style={styles.imageContainer} resizeMode='cover'/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  imageContainerArea: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    height: 65,
    marginTop: 30,
  },
  imageContainer: {
    backgroundColor: '#E391E9',
    width: 75,
    height: 65,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
  },
});
