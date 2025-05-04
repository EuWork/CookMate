import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '@/navigators/Tabs';
import RecipeDetailScreen from '@/screens/RecipeDetailScreen/RecipeDetailScreen';
import AddRecipeScreen from '@/screens/AddRecipeScreen/AddRecipeScreen';
import MapScreen from '@/screens/MapScreen/MapScreen.tsx';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={Tabs} />
      <Stack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
      />
      <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
