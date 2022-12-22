import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import PaymentScreen from "./PaymentScreen";

const CartScreen = ({ navigation, route }) => {
  const { cuisines, price, cart } = route.params;
  const Payment = () => {
    navigation.navigate("Payment");
  };
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.tab}>
          <Text style={styles.text}>Your Meal is Waiting</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/Menu/food1.png")}
            style={styles.imgStyle}
          />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Text style={styles.cuisines}>{cuisines}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
        {/* <Text style={{ fontSize: 30, fontWeight: "600" }}>
          Your cart is empty...
        </Text> */}
      </View>
      <View style={styles.total}>
        <Text
          style={{
            marginLeft: 30,
            fontSize: SIZES.h1,
            fontWeight: "600",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            //marginRight: 30,
            fontSize: SIZES.h1,
            fontWeight: "600",
          }}
        >
          -------
        </Text>
        <Text
          style={{
            marginRight: 30,
            fontSize: SIZES.h1,
            fontWeight: "600",
          }}
        >
          ${cart.reduce((acc, item) => acc + price, 0)}
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Proceed to Pay"
          color={COLORS.primary}
          onPress={Payment}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: "center",
    marginTop: 25,
  },
  tab: {
    height: 55,
  },
  text: {
    marginTop: 12,
    color: COLORS.white,
    fontSize: SIZES.h1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 370,
    height: 100,
    marginTop: 15,
    borderStyle: "solid",
    borderColor: COLORS.grey,
    borderWidth: 2,
    backgroundColor: COLORS.primary,
  },
  imgStyle: {
    width: 110,
    height: 80,
    margin: 6,
  },
  cuisines: {
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
  price: {
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
  total: {
    //display: "flex",
    width: 370,
    height: 50,
    marginTop: 15,
    marginLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
  },
  button: {
    marginTop: 25,
    width: 370,
    marginLeft: 20,
  },
});

export default CartScreen;
