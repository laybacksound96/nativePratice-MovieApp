import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, useColorScheme } from "react-native";
import Tv from "../screen/Tv";
import Movie from "../screen/Movie";
import Search from "../screen/Search";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Tv">
      <Tab.Screen
        name="Movies"
        component={Movie}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return <Ionicons name={focused ? "film" : "film-outline"} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return <Ionicons name={focused ? "tv" : "tv-outline"} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
