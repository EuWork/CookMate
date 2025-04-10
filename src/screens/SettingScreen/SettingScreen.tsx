import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { InfoModal } from '@/utils/InfoModal/InfoModal';
import { styles } from './styles/SettingScreenStyles';

export default function SettingScreen() {
  const [devModalVisible, setDevModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.settingTextStyle}>Справка и обратная связь</Text>

      <TouchableOpacity
        style={styles.settingsChoice}
        onPress={() => setDevModalVisible(true)}
      >
        <Text style={styles.settingsChoiceText}>Связь с разработчиками</Text>
        <IconButton icon="chevron-right" size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsChoice}
        onPress={() => setAboutModalVisible(true)}
      >
        <Text style={styles.settingsChoiceText}>О приложении</Text>
        <IconButton icon="chevron-right" size={30} />
      </TouchableOpacity>

      <InfoModal
        visible={devModalVisible}
        onClose={() => setDevModalVisible(false)}
        title="Связь с разработчиками"
        content={`По всем вопросам и предложениям обращайтесь:\n\nEmail: support@yourapp.com\nТелефон: +7 (XXX) XXX-XX-XX\n\nМы ценим ваше мнение!`}
      />

      <InfoModal
        visible={aboutModalVisible}
        onClose={() => setAboutModalVisible(false)}
        title="О приложении"
        content={`Версия приложения: 1.0.0\n\nРазработано с ❤️ для любителей кулинарии.\n\nВсе рецепты проверены нашими пользователями.`}
      />
    </View>
  );
}
