import StepInput from '@/components/StepInput/StepInput';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { styles } from '@/screens/AddRecipeScreen/components/AddRecipeDescription/styles/AddRecipeDescriptionStyles';

type AddReceiptDescriptionProps = {
  addSteps: string[];
  setAddSteps: (steps: string[]) => void;
};

export default function AddReceiptDescription({
  addSteps,
  setAddSteps,
}: AddReceiptDescriptionProps) {
  useEffect(() => {
    if (addSteps.length === 0) {
      setAddSteps(['']);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>Шаги приготовления</Text>

      <StepInput steps={addSteps} setSteps={setAddSteps} minSteps={1} />

      <View style={styles.divider} />
    </View>
  );
}
