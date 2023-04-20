import React from "react";
//import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "../screens/Account";
import DetailScreen from "../screens/Details";

const Draw = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator>
        <Draw.Screen component={DetailScreen} name="Food" />
        <Draw.Screen name="Profile" component={AccountScreen} />
      </Draw.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
