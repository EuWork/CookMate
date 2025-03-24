import { Text, View, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

type RecipeInfoProps = {
  recipe: {
    id: string;
    name: string;
    cookingTime: string;
    calories: string;
    ingredients: Array<{name: string, amount: string}>;
    image: string | null;
  };
};

export default function RecipeInfo({ recipe }: RecipeInfoProps) {

  const navigation = useNavigation();

  return(
    <View>
      <Card style={styles.imageContainer}>
        <Card.Cover source={{ uri: recipe.image }} style={styles.image}/>
        <IconButton icon="cards-heart-outline" size={40} iconColor="#EC221F" style={styles.iconHeartStyle}/>
        <IconButton icon='chevron-left-box-outline' size={40} iconColor="#2C2B2B" style={styles.iconBackStyle} onPress={() => navigation.goBack()}/>
        <IconButton icon='map-outline' size={40} iconColor="#E391E9" style={styles.iconMapStyle}/>
      </Card>
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>
          {recipe.name}
        </Text>
        <Text style={styles.recipeIngredients}>
          {recipe.ingredients.length} ингридиентов
        </Text>
        <View style={styles.timeCaloriesContainer}>
          <IconButton icon='clock-outline' size={35} iconColor="#E391E9"/>
          <Text style={styles.timeStyle}>
            {recipe.cookingTime}
          </Text>
          <IconButton icon='coffee-outline' size={35} iconColor="#E391E9"/>
          <Text style={styles.timeStyle}>
            {recipe.calories} каллорий
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  image: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  iconHeartStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
  },
  iconBackStyle: {
    position: 'absolute',
  },
  iconMapStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 320,
    right: 5,
  },
  recipeInfo: {
    position: 'absolute',
    alignSelf: 'center',
    width: 318,
    height: 120,
    marginTop: 380,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 10,
  },
  recipeName: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
  },
  recipeIngredients: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
    marginTop: 5,
  },
  timeCaloriesContainer: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timeStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#747474',
  },
})