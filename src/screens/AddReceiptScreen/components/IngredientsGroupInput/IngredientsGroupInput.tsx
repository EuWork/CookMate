import { View, StyleSheet, Text } from 'react-native';
import IngredientsInput from '@/components/IngredientsInput/IngredientsInput';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

export default function IngredientsGroupInput() {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', amount: '' },
    { id: 2, name: '', amount: '' },
    { id: 3, name: '', amount: '' },
  ]);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, name: '', amount: '' },
    ]);
  };

  const removeIngredient = () => {
    if (ingredients.length > 3) {
      setIngredients(ingredients.slice(0, -1));
    }
  };

  const updateIngredient = (
    id: number,
    field: 'name' | 'amount',
    value: string,
  ) => {
    setIngredients(
      ingredients.map(ingredient =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient,
      ),
    );
  };

  return (
    <View>
      <Text style={styles.textInfo}>Какие ингредиенты?</Text>
      <View style={styles.ingredientGroupContainer}>
        {ingredients.map(ingredient => (
          <IngredientsInput
            key={ingredient.id}
            name={ingredient.name}
            amount={ingredient.amount}
            onChange={(field, value) =>
              updateIngredient(ingredient.id, field, value)
            }
          />
        ))}
        <View style={styles.iconContainer}>
          <IconButton
            icon="plus-circle-outline"
            size={34}
            style={styles.newIngredientIcon}
            iconColor="#E391E9"
            onPress={addIngredient}
          />
          {ingredients.length > 3 && (
            <IconButton
              icon="minus-circle-outline"
              size={34}
              style={styles.newIngredientIcon}
              iconColor="red"
              onPress={removeIngredient}
            />
          )}
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientGroupContainer: {
    flexDirection: 'column',
  },
  textInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  newIngredientIcon: {
    marginHorizontal: 5,
  },
  divider: {
    backgroundColor: '#dcdcdc',
    marginTop: 5,
    width: 375,
    height: 2,
  },
});
