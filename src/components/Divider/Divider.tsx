import { View, StyleSheet } from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#dcdcdc',
    marginTop: 30,
    width: 375,
    height: 2,
  },
});
