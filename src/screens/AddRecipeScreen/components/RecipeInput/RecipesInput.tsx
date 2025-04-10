import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from '@/screens/AddRecipeScreen/components/RecipeInput/styles/RecipesInputStyles';
import { ReceiptInputProps } from '@/screens/AddRecipeScreen/components/RecipeInput/types/ReceiptInputTypes';

export default function RecipesInput({
  placeholder,
  onChangeText,
}: ReceiptInputProps) {
  const [text, setText] = useState('');

  const handleChangeText = useCallback(
    (newText: string) => {
      setText(newText);
      onChangeText(newText);
    },
    [onChangeText],
  );

  return (
    <TextInput
      value={text}
      onChangeText={handleChangeText}
      style={styles.search}
      placeholder={placeholder}
      placeholderTextColor="#888"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      cursorColor="#000000"
      mode="flat"
    />
  );
}
