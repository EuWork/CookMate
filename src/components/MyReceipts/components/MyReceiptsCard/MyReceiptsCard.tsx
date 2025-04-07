import { Card, IconButton, Menu } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import React, { memo, useEffect, useState } from 'react';

type MyReceiptsCardProps = {
  imageSource: { uri: string };
  title: string;
  info: string;
  onEdit: () => void;
  onDelete: () => void;
};

const MyReceiptsCard = memo(({ imageSource, title, info, onEdit, onDelete }: MyReceiptsCardProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => {
      setVisible(false);
    };
  }, []);

  const handleEdit = () => {
    setVisible(false);
    onEdit();
  };

  const handleDelete = () => {
    setVisible(false);
    onDelete();
  };

  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.cardComponent}>
        <Card.Cover source={imageSource} style={styles.imageReceipt} resizeMode='cover' />

        <View style={styles.iconsContainer}>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <IconButton
                icon="dots-horizontal"
                size={34}
                iconColor="#E391E9"
                onPress={() => setVisible(true)}
                style={styles.iconMenuPosition}
              />
            }
          >
            <Menu.Item onPress={handleEdit} title="Редактировать" />
            <Menu.Item onPress={handleDelete} title="Удалить" />
          </Menu>

          <IconButton
            icon="cards-heart-outline"
            size={30}
            iconColor="#EC221F"
            onPress={(e) => e.stopPropagation()}
            style={styles.iconHeartPosition}
          />
        </View>
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
  iconMenuPosition: {
    left: 60,
    bottom: 10
  },
  iconHeartPosition: {
    top: 310,
  },
  iconsContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
  },
});
