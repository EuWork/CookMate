import StepInput from '@/components/StepInput/StepInput';
import { Text, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

type AddReceiptDescriptionProps = {
  addSteps: string[];
  setAddSteps: (steps: string[]) => void;
}

export default function AddReceiptDescription({ addSteps, setAddSteps }: AddReceiptDescriptionProps) {

  useEffect(() => {
    if (addSteps.length === 0) {
      setAddSteps(['']);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>Шаги приготовления</Text>

      <StepInput
        steps={addSteps}
        setSteps={setAddSteps}
        minSteps={1}
      />

      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: '#dcdcdc',
    marginTop: 5,
    width: '100%',
    height: 2,
  },
});