import { Modal, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './styles/InfoModalStyles';
import { InfoModalProps } from '@/utils/InfoModal/types/InfoModalTypes';

export const InfoModal = ({
  visible,
  onClose,
  title,
  content,
}: InfoModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <IconButton
              icon="close"
              size={24}
              onPress={onClose}
              style={styles.closeButton}
            />
          </View>
          <Text style={styles.modalContent}>{content}</Text>
        </View>
      </View>
    </Modal>
  );
};
