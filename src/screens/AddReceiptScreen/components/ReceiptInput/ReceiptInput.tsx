import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ReceiptInput({ placeholder }) {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      value={text}
      onChangeText={newText => setText(newText)}
      style={styles.search}
      placeholder={placeholder}
      placeholderTextColor="#888"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      cursorColor="#000000"
      mode={'flat'}
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
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
});
