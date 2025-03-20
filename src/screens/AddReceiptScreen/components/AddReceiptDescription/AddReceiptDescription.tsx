import StepInput from '@/components/StepInput/StepInput';
import { Text, StyleSheet, View } from 'react-native';

export default function AddReceiptDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>Шаги приготовления</Text>

      <StepInput />

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
    width: 375,
    height: 2,
  },
});
