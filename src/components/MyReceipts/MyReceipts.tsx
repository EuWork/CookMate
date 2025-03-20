import { Text, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import ScrollView = Animated.ScrollView;
import { useFonts } from 'expo-font';
import MyReceiptsCard from '@/components/MyReceipts/components/MyReceiptsCard/MyReceiptsCard';
import { ActivityIndicator } from 'react-native-paper';

export default function MyReceipts({ onPressRecipe }) {
  const [fontsLoaded] = useFonts({
    Roboto: require('src/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text style={styles.myRecipesTitle}>Мои рецепты</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        snapToAlignment="start"
      >
        <TouchableOpacity onPress={() => onPressRecipe('Dener')}>
          <MyReceiptsCard
            imageSource={require('src/assets/Dener.png')}
            title="Денер"
            info="6 ингредиентов ● 20 минут"
          />
        </TouchableOpacity>
        <MyReceiptsCard
          imageSource={require('src/assets/Dener.png')}
          title="Денер"
          info="6 ингредиентов ● 20 минут"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  myRecipesTitle: {
    position: 'relative',
    marginTop: 30,
    width: 340,
    alignSelf: 'flex-start',
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: '800',
    marginLeft: 30,
  },
});
