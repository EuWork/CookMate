import { Text, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';
import { StepInputTypesProps } from '@/components/StepInput/types/StepInputTypes';
import { styles } from '@/components/StepInput/styles/StepInputStyles';

export default function StepInput({
  steps,
  setSteps,
  minSteps = 1,
}: StepInputTypesProps) {
  const [inputHeights, setInputHeights] = useState<number[]>(
    steps.map(() => 40),
  );

  const addStep = () => {
    setSteps([...steps, '']);
    setInputHeights([...inputHeights, 40]);
  };

  const removeStep = () => {
    if (steps.length > minSteps) {
      setSteps(steps.slice(0, -1));
      setInputHeights(inputHeights.slice(0, -1));
    }
  };

  const updateStep = (text: string, index: number) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  const updateHeight = (index: number, height: number) => {
    const newHeights = [...inputHeights];
    newHeights[index] = Math.max(40, height);
    setInputHeights(newHeights);
  };

  return (
    <View>
      {steps.map((step, index) => (
        <View key={`step-${index}`} style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Шаг {index + 1}</Text>
          <TextInput
            style={[styles.input, { height: inputHeights[index] || 40 }]}
            placeholder="Опишите этот шаг подробно..."
            multiline
            value={step}
            onChangeText={text => updateStep(text, index)}
            onContentSizeChange={e =>
              updateHeight(index, e.nativeEvent.contentSize.height)
            }
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
        {steps.length > minSteps && (
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
