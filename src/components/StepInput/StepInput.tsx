import { Text, TextInput, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

export default function stepInput() {
  const [steps, setSteps] = useState(['', '']);
  const [inputHeights, setInputHeights] = useState([40, 40]);

  const addStep = () => {
    setSteps([...steps, '']);
    setInputHeights([...inputHeights, 40]); // По умолчанию высота 40
  };

  const removeStep = () => {
    if (steps.length > 2) {
      setSteps(steps.slice(0, -1));
      setInputHeights(inputHeights.slice(0, -1));
    }
  };

  const updateStep = (text, index) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  const updateHeight = (event, index) => {
    const newHeight = event.nativeEvent.contentSize.height;
    const updatedHeights = [...inputHeights];
    updatedHeights[index] = newHeight;
    setInputHeights(updatedHeights);
  };

  return (
    <View>
      {steps.map((step, index) => (
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
        {steps.length > 2 && (
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
    position: 'relative',
    width: 360,
    height: 50,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    elevation: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
});
