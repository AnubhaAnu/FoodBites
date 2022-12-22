import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CartScreen from "../screens/Cart";
import HomeScreen from "../screens/Home";
//import AccountScreen from "../screens/Account";
import About from "./About";
import TrackScreen from "../components/Track";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../constants/theme";
import PaymentScreen from "./PaymentScreen";

const Tab = createBottomTabNavigator();

const DetailScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Food"
        screenOptions={{
          tabBarActiveTintColor: "red",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Food"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="fastfood" size={28} color={COLORS.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={About}
          options={{
            tabBarIcon: () => (
              <MaterialIcons
                name="menu-book"
                size={28}
                color={COLORS.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons
                name="shopping-cart"
                size={28}
                color={COLORS.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="payment" size={28} color={COLORS.primary} />
            ),
          }}
        />

        <Tab.Screen
          name="Track"
          component={TrackScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons
                name="location-history"
                size={28}
                color={COLORS.primary}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
