import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import IngredientsInput from '@/components/IngredientsInput/IngredientsInput';

type Ingredient = {
  id: number;
  name: string;
  amount: string;
};

type IngredientsGroupInputProps = {
  addIngredients: Ingredient[];
  setAddIngredients: (ingredients: Ingredient[]) => void;
};

const INITIAL_INGREDIENTS: Ingredient[] = [
  { id: 1, name: '', amount: '' },
  { id: 2, name: '', amount: '' },
  { id: 3, name: '', amount: '' },
];

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
    width: '100%',
    height: 2,
  },
});

export default function IngredientsGroupInput({
                                                setAddIngredients,
                                              }: IngredientsGroupInputProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS);

  const addIngredient = useCallback(() => {
    const newIngredient = {
      id: ingredients.length + 1,
      name: '',
      amount: '',
    };
    const newIngredients = [...ingredients, newIngredient];
    setIngredients(newIngredients);
    setAddIngredients(newIngredients);
  }, [ingredients, setAddIngredients]);

  const removeIngredient = useCallback(() => {
    if (ingredients.length > 3) {
      const newIngredients = ingredients.slice(0, -1);
      setIngredients(newIngredients);
      setAddIngredients(newIngredients);
    }
  }, [ingredients, setAddIngredients]);

  const updateIngredient = useCallback(
    (id: number, field: keyof Ingredient, value: string) => {
      const newIngredients = ingredients.map(ingredient =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
      );
      setIngredients(newIngredients);
      setAddIngredients(newIngredients);
    },
    [ingredients, setAddIngredients]
  );

  return (
    <View>
      <Text style={styles.textInfo}>Какие ингредиенты?</Text>
      <View style={styles.ingredientGroupContainer}>
        {ingredients.map(ingredient => (
          <IngredientsInput
            key={ingredient.id}
            name={ingredient.name}
            amount={ingredient.amount}
            onChange={(field, value) => updateIngredient(ingredient.id, field, value)}
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