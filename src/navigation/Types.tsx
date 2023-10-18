import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

export enum MainRoutes {
  MyShelf = "MyShelf",
  ShoppingList = "ShoppingList",
  ShelfAddition = "ShelfAddition",
  Profile = "Profile",
}

export type MainStackParamList = {
  [MainRoutes.MyShelf]: undefined;
  [MainRoutes.ShoppingList]: undefined;
  [MainRoutes.ShelfAddition]: undefined;
  [MainRoutes.Profile]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;

export const MainStack = createStackNavigator<MainStackParamList>();
