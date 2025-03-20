import { TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface IngredientsInputProps {
  name: string;
  amount: string;
  onChange: (field: 'name' | 'amount', value: string) => void;
}

export default function IngredientsInput({
  name,
  amount,
  onChange,
}: IngredientsInputProps) {
  return (
    <View style={styles.ingredientContainer}>
      <TextInput
        value={name}
        onChangeText={newText => onChange('name', newText)}
        style={styles.ingredientName}
        placeholder="Введите ингредиент"
        placeholderTextColor="#888"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#000000"
        mode="flat"
      />
      <TextInput
        value={amount}
        onChangeText={newText => onChange('amount', newText)}
        style={styles.ingredientNumber}
        placeholder="Введите количество"
        placeholderTextColor="#888"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#000000"
        mode="flat"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ingredientName: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: 220,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
  ingredientNumber: {
    position: 'relative',
    marginLeft: 20,
    backgroundColor: '#ffffff',
    width: 120,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    elevation: 5,
  },
});
