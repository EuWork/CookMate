import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '@/components/CustomNavBar/styles/CustomNavBarStyles';

export default function CustomNavBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index == index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabButton}
            onPress={onPress}
          >
            <MaterialCommunityIcons
              name={
                options.tabBarIcon({
                  color: isFocused ? '#E391E9' : '#aaa',
                  size: 24,
                }).props.name
              }
              size={30}
              color={isFocused ? '#E391E9' : 'aaa'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
