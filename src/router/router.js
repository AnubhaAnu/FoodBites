import React from "react";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import ForgotPwdScreen from "../screens/forgotPwd";
import { COLORS } from "../constants/theme";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DetailScreen from "../screens/Details";
import RegisterEmail from "../screens/RegisterEmail";
import PaymentScreen from "../screens/PaymentScreen";

const authStack = createStackNavigator({
  signin: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  signup: {
    screen: SignUpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  forgotpwd: {
    screen: ForgotPwdScreen,
    navigationOptions: {
      headerTitle: null,
      headerBackTitle: "back",
      headerBackTitleStyle: {
        fontWeight: "bold",
      },
      headerTintColor: COLORS.white,
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
    },
  },
  register: {
    screen: RegisterEmail,
    navigationOptions: {
      headerTitle: null,
      headerBackTitle: "back",
      headerBackTitleStyle: {
        fontWeight: "bold",
      },
      headerTintColor: COLORS.white,
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
    },
  },
  details: {
    screen: DetailScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

// const bottomStack = createBottomTabNavigator({
//   history: {
//     screen: HistoryScreen,
//   },
//   home: {
//     screen: HomeScreen,
//   },
//   cart: {
//     screen: CartScreen,
//   },
//   account: {
//     screen: AccountScreen,
//   },
// });

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />

//       <Tab.Screen name="History" component={HistoryScreen} />
//     </Tab.Navigator>
//   );
// }

const router = createAppContainer(authStack);

export default router;
