import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles/StepsInfoStyles';

type StepsInfoProps = {
  steps?: string[];
};

export default function StepsInfo({ steps }: StepsInfoProps) {
  if (!steps || !Array.isArray(steps)) {
    return (
      <View>
        <Text style={styles.stepsTitleText}>Приготовление</Text>
        <Text style={styles.noStepsText}>Нет данных о шагах приготовления</Text>
      </View>
    );
  }

  if (steps.length === 0) {
    return (
      <View>
        <Text style={styles.stepsTitleText}>Приготовление</Text>
        <Text style={styles.noStepsText}>Шаги приготовления не указаны</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.stepsTitleText}>Приготовление</Text>
      <ScrollView>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepsContainer}>
            <Text style={styles.stepNumber}>Шаг {index + 1}</Text>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}