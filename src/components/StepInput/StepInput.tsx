import { Text, TextInput, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState, useEffect } from 'react';

type StepInputProps = {
  steps: string[];
  setSteps: (steps: string[]) => void;
};

export default function StepInput({ steps: propSteps, setSteps }: StepInputProps) {
  const [localSteps, setLocalSteps] = useState<string[]>(propSteps);
  const [inputHeights, setInputHeights] = useState<number[]>(propSteps.map(() => 40));

  // Синхронизация с родительским состоянием
  useEffect(() => {
    setLocalSteps(propSteps);
    setInputHeights(propSteps.map(() => 40));
  }, [propSteps]);

  const addStep = () => {
    const newSteps = [...localSteps, ''];
    setLocalSteps(newSteps);
    setSteps(newSteps);
    setInputHeights([...inputHeights, 40]);
  };

  const removeStep = () => {
    if (localSteps.length > 2) {
      const newSteps = localSteps.slice(0, -1);
      setLocalSteps(newSteps);
      setSteps(newSteps);
      setInputHeights(inputHeights.slice(0, -1));
    }
  };

  const updateStep = (text: string, index: number) => {
    const newSteps = [...localSteps];
    newSteps[index] = text;
    setLocalSteps(newSteps);
    setSteps(newSteps);
  };

  const updateHeight = (event: any, index: number) => {
    const newHeight = event.nativeEvent.contentSize.height;
    const updatedHeights = [...inputHeights];
    updatedHeights[index] = newHeight;
    setInputHeights(updatedHeights);
  };

  return (
    <View>
      {localSteps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Шаг {index + 1}</Text>
          <TextInput
            style={[styles.input, { height: inputHeights[index] }]}
            placeholder="Введите описание шага"
            multiline
            value={step}
            onChangeText={text => updateStep(text, index)}
            onContentSizeChange={event => updateHeight(event, index)}
          />
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <IconButton
          icon="plus-circle-outline"
          size={34}
          iconColor="#E391E9"
          onPress={addStep}
        />
        {localSteps.length > 2 && (
          <IconButton
            icon="minus-circle-outline"
            size={34}
            iconColor="red"
            onPress={removeStep}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    minHeight: 40,
    width: 360,
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
});