import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { styles } from '@/components/Search/styles/SearchStyles';

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
