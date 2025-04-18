import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '@/navigators/Tabs';
import ReceiptDetailScreen from '@/screens/RecipeDetailScreen/RecipeDetailScreen';
import AddRecipeScreen from '@/screens/AddRecipeScreen/AddRecipeScreen';

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
      <Stack.Screen name="MainScreen" component={Tabs} />
      <Stack.Screen
        name="ReceiptDetailScreen"
        component={ReceiptDetailScreen}
      />
      <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
    </Stack.Navigator>
  );
}
