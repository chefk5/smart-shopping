import { createStackNavigator } from "@react-navigation/stack";
import ShoppingList from "../screens/ShoppingList";

const Stack = createStackNavigator();

function ShoppingListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homes" component={ShoppingList} />
    </Stack.Navigator>
  );
}

export default ShoppingListStack;
