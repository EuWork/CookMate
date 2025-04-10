import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '@/components/IngredientsInput/styles/IngredientsInputStyles';

interface IIngredientsInputProps {
  name: string;
  amount: string;
  onChange: (field: 'name' | 'amount', value: string) => void;
}

export default function IngredientsInput({
  name,
  amount,
  onChange,
}: IIngredientsInputProps) {
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
