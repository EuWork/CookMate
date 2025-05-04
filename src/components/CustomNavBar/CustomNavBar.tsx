import { TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles/CustomNavBarStyles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import React from 'react';

interface IconProps {
  name: string;
  color: string;
  size: number;
}

export default function CustomNavBar({
                                       state,
                                       descriptors,
                                       navigation,
                                     }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: { key: string; name: string }, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            (navigation as NavigationHelpers<ParamListBase>).navigate(route.name);
          }
        };

        const iconElement = options.tabBarIcon?.({
          focused: isFocused,
          color: isFocused ? '#E391E9' : '#aaa',
          size: 24,
        });

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={0.7}
          >
            {React.isValidElement<IconProps>(iconElement) && (
              <MaterialCommunityIcons
                name={iconElement.props.name}
                size={30}
                color={isFocused ? '#E391E9' : '#aaa'}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
