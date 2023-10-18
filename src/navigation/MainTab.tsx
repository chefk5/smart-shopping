import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ShoppingListStack from "./ShoppingListStack";
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {/* Define your tab screens */}
        <Tab.Screen name={"home"} component={HomeStack} />
        <Tab.Screen name={"ss2"} component={ShoppingListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
