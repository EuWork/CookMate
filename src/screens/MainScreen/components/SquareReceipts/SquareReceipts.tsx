import { Animated, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ScrollView = Animated.ScrollView;

export default function SquareReceipts({ onPressRecipe }) {

  return (
    <View style={styles.imageContainerArea}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <TouchableOpacity onPress={() => onPressRecipe('Dener')}>
          <Card.Cover
            source={require('@/assets/Dener.png')}
            style={styles.imageContainer}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Card.Cover
          source={require('@/assets/favicon.png')}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <Card.Cover
          source={require('@/assets/favicon.png')}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <Card.Cover
          source={require('@/assets/favicon.png')}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <Card.Cover
          source={require('@/assets/favicon.png')}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <Card.Cover
          source={require('@/assets/favicon.png')}
          style={styles.imageContainer}
          resizeMode="cover"
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
  imageContainerArea: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    height: 65,
    marginTop: 30,
  },
  imageContainer: {
    backgroundColor: '#E391E9',
    width: 75,
    height: 65,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 5,
  },
});
