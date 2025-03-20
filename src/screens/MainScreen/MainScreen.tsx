import { StyleSheet, View, Animated } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';
import SquareReceipts from '@/screens/MainScreen/components/SquareReceipts/SquareReceipts';
import MyReceipts from '@/components/MyReceipts/MyReceipts';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigators/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

export default function MainScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (recipe) => {
    if (!recipe) {
      console.error('Ошибка: recipe не передан');
      return;
    }
    navigation.navigate('ReceiptDetailScreen', { recipe });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search />
        <SquareReceipts onPressRecipe={handlePress} />
        <MyReceipts onPressRecipe={handlePress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
