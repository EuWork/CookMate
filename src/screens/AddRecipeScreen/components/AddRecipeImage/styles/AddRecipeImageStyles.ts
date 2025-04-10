import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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