import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const About = ({ navigation, route }) => {
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (item) => {
    setCart([...cart, { ...item }]);
  };
  const { cuisines, price, location, item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.tab}>
          <Text style={styles.text}>Menu-Book</Text>
        </View>
      </View>
      {/* <View style={styles.container}> */}
      <View style={styles.cardContainer}>
        <Image
          source={require("../../assets/Menu/food1.png")}
          style={styles.image}
        />
        <View style={styles.infoStyle}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.textStyle}>cuisines-{cuisines}</Text>
            <Text style={styles.textStyle}>${price}</Text>
            <Text style={styles.textStyle}>{location}</Text>
            {cart.some((p) => p.id === item.id) ? (
              <View>
                <TouchableOpacity>
                  <Button
                    title="Remove from Cart"
                    color={COLORS.pink}
                    onPress={() =>
                      setCart((prevItems) =>
                        prevItems.filter((prod) => prod.id !== item.id)
                      )
                    }
                  />
                </TouchableOpacity>
                <View style={styles.View}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.h4,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    Added To Cart
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.h4,
                      fontWeight: "600",
                      marginRight: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("Cart", { cuisines, price, cart })
                    }
                  >
                    View >>>
                  </Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity>
                <Button
                  title="Add To Cart"
                  color={COLORS.primary}
                  onPress={() => handleAddtoCart(item)}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get("window").width);

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
    flex: 1,
  },
  cardContainer: {
    marginLeft: 10,
    width: deviceWidth - 20,
    height: "auto",
    borderRadius: 20,
    shadowColor: "#000",
    marginTop: 12,
    elevation: 10,
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
  },
  image: {
    width: deviceWidth - 51,
    height: 250,
    borderRadius: 17,
    marginLeft: 14,
    //opacity: 0.8,
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: deviceWidth - 52,
    marginLeft: 15,
  },
  textStyle: {
    fontSize: SIZES.h1,
    padding: 4,
    justifyContent: "center",
    color: COLORS.primary,
  },
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    backgroundColor: COLORS.primary,
  },
});

export default About;
