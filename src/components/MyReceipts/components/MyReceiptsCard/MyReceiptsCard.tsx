import { Card, IconButton } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import React, { memo } from 'react';

type MyReceiptsCardProps = {
  imageSource: { uri: string };
  title: string;
  info: string;
};

const MyReceiptsCard = memo(({ imageSource, title, info }: MyReceiptsCardProps) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.cardComponent}>
        <Card.Cover source={imageSource} style={styles.imageReceipt} />

        <IconButton
          icon="dots-horizontal"
          size={34}
          style={[styles.iconStyle, styles.iconMenuPosition]}
          iconColor="#E391E9"
        />

        <IconButton
          icon="cards-heart-outline"
          size={30}
          style={[styles.iconStyle, styles.iconHeartPosition]}
          iconColor="#EC221F"
        />
      </Card>

      <Text style={styles.foodName}>{title}</Text>
      <Text style={styles.foodInfo}>{info}</Text>
    </View>
  );
});

export default MyReceiptsCard;

const styles = StyleSheet.create({
  cardWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  cardComponent: {
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
  },
  imageReceipt: {
    width: 205,
    height: 359,
  },
  foodName: {
    width: 205,
    color: '#000000',
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '800',
  },
  foodInfo: {
    color: '#747474',
    width: 205,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  iconMenuPosition: {
    bottom: 310,
  },
  iconHeartPosition: {
    top: 310,
  },
});
