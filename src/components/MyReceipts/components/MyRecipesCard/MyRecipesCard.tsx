import { Card, IconButton, Menu } from 'react-native-paper';
import { Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { MyRecipesCardTypesProps } from '@/components/MyReceipts/components/MyRecipesCard/types/MyRecipesCardTypes';
import { myRecipesCardStyles } from '@/components/MyReceipts/components/MyRecipesCard/styles/MyRecipesCardStyles';

export const MyRecipesCard = memo(
  ({
    recipe,
    imageSource,
    title,
    info,
    onEdit,
    onDelete,
  }: MyRecipesCardTypesProps) => {
    const [visible, setVisible] = useState(false);

    const { toggleFavorite, isFavorite } = useFavorites();

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
      <View style={myRecipesCardStyles.cardWrapper}>
        <Card style={myRecipesCardStyles.cardComponent}>
          <Card.Cover
            source={imageSource}
            style={myRecipesCardStyles.imageReceipt}
            resizeMode="cover"
          />

          <View style={myRecipesCardStyles.iconsContainer}>
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <IconButton
                  icon="dots-horizontal"
                  size={34}
                  iconColor="#E391E9"
                  onPress={() => setVisible(true)}
                  style={myRecipesCardStyles.iconMenuPosition}
                />
              }
            >
              <Menu.Item onPress={handleEdit} title="Редактировать" />
              <Menu.Item onPress={handleDelete} title="Удалить" />
            </Menu>

            <IconButton
              icon={
                isFavorite(recipe.id) ? 'cards-heart' : 'cards-heart-outline'
              }
              size={30}
              iconColor="#EC221F"
              onPress={e => {
                e.stopPropagation();
                toggleFavorite(recipe);
              }}
              style={myRecipesCardStyles.iconHeartPosition}
            />
          </View>
        </Card>

        <Text style={myRecipesCardStyles.foodName}>{title}</Text>
        <Text style={myRecipesCardStyles.foodInfo}>{info}</Text>
      </View>
    );
  },
);
