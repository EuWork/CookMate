import { MainScreen } from '@/screens/MainScreen/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteReceiptsScreen from '@/screens/FavRecipeScreen/FavRecipesScreen';
import AddRecipeScreen from '@/screens/AddRecipeScreen/AddRecipeScreen';
import SettingScreen from '@/screens/SettingScreen/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomNavBar from '@/components/CustomNavBar/CustomNavBar';

const Tab = createBottomTabNavigator();

const getTabBarIcon =
  name =>
  ({ color, size }) => (
    <MaterialCommunityIcons size={size} color={color} name={name} />
  );

export default function Tabs() {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomNavBar {...props} />}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ tabBarIcon: getTabBarIcon('home-outline') }}
      />
      <Tab.Screen
        name="FavoriteReceiptsScreen"
        component={FavoriteReceiptsScreen}
        options={{ tabBarIcon: getTabBarIcon('heart-outline') }}
      />
      <Tab.Screen
        name="AddReceiptScreen"
        component={AddRecipeScreen}
        options={{ tabBarIcon: getTabBarIcon('plus-circle-outline') }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: getTabBarIcon('cog-outline'),
          headerShown: true,
          title: 'Настройки',
          headerStyle: {
            backgroundColor: '#E391E9',
          },
          headerTitleStyle: {
            color: '#ffffff',
            fontSize: 24,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}
