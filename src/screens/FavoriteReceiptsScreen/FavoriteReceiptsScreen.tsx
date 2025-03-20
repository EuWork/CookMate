import { Animated, StyleSheet, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';
import FavReceiptsCard from '@/screens/FavoriteReceiptsScreen/components/FavReceiptCard/FavReceiptsCard';

export default function FavoriteReceiptsScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo />
        <Search />
        <Text style={styles.favTitle}>Избранное</Text>
        <FavReceiptsCard
          imageSource={require('src/assets/Dener.png')}
          title="Денер"
          info="6 ингредиентов ● 20 минут"
        />
        <FavReceiptsCard
          imageSource={require('src/assets/Dener.png')}
          title="Денер"
          info="6 ингредиентов ● 20 минут"
        />
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
    paddingBottom: 100,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  favTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'Roboto',
    fontWeight: '800',
    marginTop: 20,
    fontSize: 26,
    marginLeft: 30,
  },
});
