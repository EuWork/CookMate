import { Card, IconButton } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

export default function FavReceiptsCard({ imageSource, title, info }) {
  return (
    <View>
      <Card style={styles.cardComponent}>
        <Card.Cover source={imageSource} style={styles.imageReceipt} />
        <IconButton
          icon="cards-heart"
          size={35}
          style={styles.iconHearStyle}
          iconColor="#EC221F"
        />
      </Card>
      <Text style={styles.foodName}>{title}</Text>
      <Text style={styles.foodInfo}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardComponent: {
    position: 'relative',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  imageReceipt: {
    width: 360,
    height: 450,
  },
  foodName: {
    position: 'relative',
    alignSelf: 'center',
    color: '#000000',
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  foodInfo: {
    position: 'relative',
    color: '#747474',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconHearStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 400,
  },
});
