import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function Search() {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      value={text}
      onChangeText={newText => setText(newText)}
      style={styles.search}
      placeholder="Поиск рецепта"
      placeholderTextColor="#888"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      cursorColor="#000000"
      mode={'flat'}
      left={<TextInput.Icon icon="magnify" />}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: 360,
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    elevation: 5,
  },
});
