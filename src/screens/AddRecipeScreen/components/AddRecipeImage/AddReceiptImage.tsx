import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import Divider from '@/utils/Divider/Divider';
import RecipesInput from '@/screens/AddRecipeScreen/components/RecipeInput/RecipesInput';
import { useCallback } from 'react';
import { styles } from '@/screens/AddRecipeScreen/components/AddRecipeImage/styles/AddRecipeImageStyles';
import { launchImageLibrary } from 'react-native-image-picker';

type AddReceiptImageProps = {
  image: string | null;
  name: string;
  setImage: (image: string ) => void;
  setName: (name: string ) => void;
};

export default function AddReceiptImage({
  image,
  setImage,
  setName,
}: AddReceiptImageProps) {
  const pickImage = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    });

    if (result.didCancel) return;

    if (result.errorCode) {
      Alert.alert(`Ошибка: ${result.errorMessage}`);
      return;
    }

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri!);
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
