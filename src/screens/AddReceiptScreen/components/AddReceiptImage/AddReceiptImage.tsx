import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Divider from '@/components/Divider/Divider';
import ReceiptInput from '@/screens/AddReceiptScreen/components/ReceiptInput/ReceiptInput';
import { useCallback } from 'react';

type AddReceiptImageProps = {
  image: string | null;
  name: string;
  setImage: (image: string | null) => void;
  setName: (name: string | null) => void;
};

export default function AddReceiptImage({image, setImage, setName }: AddReceiptImageProps) {
  const pickImage = useCallback( async () => {
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
      <ReceiptInput placeholder="Название рецепта" onChangeText={setName} />

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  addReceiptTitle: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 26,
    marginTop: 20,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  imageContainer: {
    marginTop: 20,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  uploadText: {
    bottom: 20,
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  changePhotoButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 4,
  },
  cameraIcon: {
    margin: 0,
  },
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  uploadIcon: {
    backgroundColor: '#ffffff',
  },
});
