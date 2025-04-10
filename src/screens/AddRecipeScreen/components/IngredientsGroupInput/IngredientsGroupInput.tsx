import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import IngredientsInput from '@/components/IngredientsInput/IngredientsInput';
import { styles } from '@/screens/AddRecipeScreen/components/IngredientsGroupInput/styles/IngredientsGroupInputStyles';
import { Ingredient } from '@/screens/AddRecipeScreen/components/IngredientsGroupInput/types/IngredientTypes';
import {
  IngredientsGroupInputProps
} from '@/screens/AddRecipeScreen/components/IngredientsGroupInput/types/IngredientsGroupInputTypes';

const INITIAL_INGREDIENTS: Ingredient[] = [
  { id: 1, name: '', amount: '' },
  { id: 2, name: '', amount: '' },
  { id: 3, name: '', amount: '' },
];

export default function IngredientsGroupInput({
  setAddIngredients,
}: IngredientsGroupInputProps) {
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(INITIAL_INGREDIENTS);

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
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient,
      );
      setIngredients(newIngredients);
      setAddIngredients(newIngredients);
    },
    [ingredients, setAddIngredients],
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
