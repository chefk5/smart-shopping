import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";
import { Button } from "react-native-paper";
import { commonStyles } from "../styles/Common";
import ShelfAddition from "../screens/ShelfAddition";
import { MainNavigationProp, MainRoutes } from "./Types";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();
interface HomeStackProps {
  navigation: MainNavigationProp;
}
function HomeStack({ navigation }: HomeStackProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainRoutes.MyShelf}
        component={Home}
        options={{
          title: "My Shelf",
          headerRight: () => (
            <Button
              style={commonStyles.rightMargin}
              onPress={() => navigation.navigate(MainRoutes.ShelfAddition)}
            >
              Add Items
            </Button>
          ),
          headerLeft: () => (
            <Button
              style={commonStyles.leftMargin}
              onPress={() => navigation.navigate(MainRoutes.Profile)}
            >
              Profile
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name={MainRoutes.ShelfAddition}
        component={ShelfAddition}
        options={{
          title: "Add Item", // Set the screen title
        }}
      />
      <Stack.Screen
        name={MainRoutes.Profile}
        component={Profile}
        options={{
          title: "Add Item", // Set the screen title
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
