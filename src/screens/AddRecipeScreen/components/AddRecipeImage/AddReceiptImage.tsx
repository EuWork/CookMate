import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Divider from '@/utils/Divider/Divider';
import RecipesInput from '@/screens/AddRecipeScreen/components/RecipeInput/RecipesInput';
import { useCallback } from 'react';
import { styles } from '@/screens/AddRecipeScreen/components/AddRecipeImage/styles/AddRecipeImageStyles';

type AddReceiptImageProps = {
  image: string | null;
  name: string;
  setImage: (image: string | null) => void;
  setName: (name: string | null) => void;
};

export default function AddReceiptImage({
  image,
  setImage,
  setName,
}: AddReceiptImageProps) {
  const pickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Требуется разрешение на доступ к галерее');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      selectionLimit: 1,
      mediaTypes: 'images',
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }, [setImage]);

  return (
    <View style={styles.container}>
      <Text style={styles.addReceiptTitle}>Создать свой рецепт</Text>
      <RecipesInput placeholder="Название рецепта" onChangeText={setName} />

      <View style={styles.imageContainer}>
        {image ? (
          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={pickImage}
            activeOpacity={0.7}
          >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.changePhotoButton}>
              <IconButton
                icon="camera"
                size={24}
                iconColor="#FFFFFF"
                style={styles.cameraIcon}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.uploadContainer}>
            <IconButton
              icon="plus-box-outline"
              size={250}
              style={styles.uploadIcon}
              iconColor="#E391E9"
              onPress={pickImage}
            />
            <Text style={styles.uploadText}>Прикрепите фото</Text>
          </View>
        )}
      </View>

      <Divider />
    </View>
  );
}
