import { Card, IconButton } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';

export default function MyReceiptsCard({ imageSource, title, info }) {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.cardComponent}>
        <Card.Cover source={imageSource} style={styles.imageReceipt} />
        <IconButton
          icon="dots-horizontal"
          size={34}
          style={styles.iconMenuStyle}
          iconColor="#E391E9"
        />
        <IconButton
          icon="cards-heart-outline"
          size={30}
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
  cardWrapper: {
    marginLeft: 10,
    marginRight: 30,
  },
  cardComponent: {
    position: 'relative',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  imageReceipt: {
    width: 205,
    height: 359,
  },
  foodName: {
    position: 'relative',
    width: 205,
    alignSelf: 'flex-start',
    color: '#000000',
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  foodInfo: {
    position: 'relative',
    color: '#747474',
    alignSelf: 'flex-start',
    width: 205,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconMenuStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 310,
  },
  iconHearStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 310,
  },
});
