import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type ReceiptInputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
};

const TEXT_INPUT_STYLE = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    width: 360,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
});

export default function ReceiptInput({ placeholder, onChangeText }: ReceiptInputProps) {
  const [text, setText] = useState('');

  const handleChangeText = useCallback((newText: string) => {
    setText(newText);
    onChangeText(newText);
  }, [onChangeText]);

  return (
    <TextInput
      value={text}
      onChangeText={handleChangeText}
      style={TEXT_INPUT_STYLE.search}
      placeholder={placeholder}
      placeholderTextColor="#888"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      cursorColor="#000000"
      mode="flat"
    />
  );
}