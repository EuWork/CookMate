import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
    shadowColor: '#191919',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});
