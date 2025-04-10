import { Text, View } from 'react-native';
import { styles } from './styles/StepsInfoStyles';

type StepsInfoProps = {
  steps: string[];
};

export default function StepsInfo({ steps }: StepsInfoProps) {
  return (
    <View>
      <Text style={styles.stepsTitleText}>Приготовление</Text>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepsContainer}>
          <Text style={styles.stepNumber}>Шаг {index + 1}</Text>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </View>
  );
}
