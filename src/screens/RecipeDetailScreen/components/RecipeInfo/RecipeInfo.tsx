import { Text, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '@/hooks/useFavorites';
import { RecipeInfoProps } from '@/screens/RecipeDetailScreen/components/RecipeInfo/types/RecipeInfoTypes';
import { styles } from './styles/RecipeInfoStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types.ts';

export default function RecipeInfo({ recipe }: RecipeInfoProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Card style={styles.imageContainer}>
        <Card.Cover
          source={
            recipe.image
              ? { uri: recipe.image }
              : require('@/assets/ingredients/default.png')
          }
          style={styles.image}
        />
        <IconButton
          icon={isFavorite(recipe.id) ? 'cards-heart' : 'cards-heart-outline'}
          size={40}
          iconColor="#EC221F"
          style={styles.iconHeartStyle}
          onPress={() => toggleFavorite(recipe)}
        />
        <IconButton
          icon="chevron-left-box-outline"
          size={40}
          iconColor="#2C2B2B"
          style={styles.iconBackStyle}
          onPress={() => navigation.goBack()}
        />
        <IconButton
          icon="map-outline"
          size={40}
          iconColor="#E391E9"
          style={styles.iconMapStyle}
          onPress={() => navigation.navigate('MapScreen')}
        />
      </Card>
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>{recipe.name}</Text>
        <Text style={styles.recipeIngredients}>
          {recipe.ingredients.length} ингредиентов
        </Text>
        <View style={styles.timeCaloriesContainer}>
          <IconButton icon="clock-outline" size={35} iconColor="#E391E9" />
          <Text style={styles.timeStyle}>{recipe.cookingTime}</Text>
          <IconButton icon="coffee-outline" size={35} iconColor="#E391E9" />
          <Text style={styles.timeStyle}>{recipe.calories} калорий</Text>
        </View>
      </View>
    </View>
  );
}
