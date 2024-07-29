import Colors from "@/constants/Colors";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const BookingsTopTabs = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: Colors.button,
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontFamily: "montSB",
          fontSize: 13,
          textTransform: "capitalize",
        }
      }}
    >
      <MaterialTopTabs.Screen name="active" options={{ title: "Active" }} />
      <MaterialTopTabs.Screen name="past" options={{ title: "Past" }} />
      <MaterialTopTabs.Screen name="canceled" options={{ title: "Canceled" }} />
    </MaterialTopTabs>
  );
};

export default BookingsTopTabs;
