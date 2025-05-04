import { Card, IconButton } from 'react-native-paper';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFavorites } from '@/hooks/useFavorites';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { styles } from '@/screens/FavRecipeScreen/components/FavRecipeCard/styles/FavRecipeCardStyles';
import { FavRecipesCardProps } from '@/screens/FavRecipeScreen/components/FavRecipeCard/types/FavRecipesCardTypes.ts';


export default function FavRecipeCard({ recipe }: FavRecipesCardProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecipeDetailScreen', { recipe })}
    >
      <View style={styles.cardComponent}>
        <Card.Cover
          source={{ uri: recipe.image! }}
          style={styles.imageReceipt}
        />
        <View>
          <Text style={styles.foodName}>{recipe.name}</Text>
          <Text style={styles.foodInfo}>
            {recipe.ingredients.length} ингредиентов ● {recipe.cookingTime}
          </Text>
        </View>
        <IconButton
          icon={isFavorite(recipe.id) ? 'cards-heart' : 'cards-heart-outline'}
          size={30}
          iconColor="#EC221F"
          onPress={() => toggleFavorite(recipe)}
          style={styles.iconHearStyle}
        />
      </View>
    </TouchableOpacity>
  );
}
