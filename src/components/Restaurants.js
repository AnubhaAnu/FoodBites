import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/Cart";

const Restaurants = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.textBtn}>{`View all >>`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Menu", {
                      item: item.id,
                      cuisines: item.cuisines,
                      price: item.price,
                      location: item.location.address,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.featured_image }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>
                {item.location.locality_verbose}
              </Text>
              <View style={styles.rating}>
                <Rating count={item.user_rating.aggregate_rating} />
                <Text style={styles.address}>
                  ({item.user_rating.votes} reviews)
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.title,
    fontSize: SIZES.h3,
    fontWeight: "bold",
    marginVertical: 5,
  },
  textBtn: {
    color: COLORS.primary,
    fontSize: SIZES.h6,
    fontWeight: "700",
  },
  item: {
    marginRight: 5,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  image: {
    width: SIZES.width / 2 + 60,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  name: {
    color: COLORS.title,
    fontWeight: "bold",
    marginTop: 5,
    marginHorizontal: 5,
    fontSize: SIZES.h4,
  },
  address: {
    color: COLORS.grey,
    fontWeight: "800",
    fontSize: SIZES.h6,
    // marginHorizontal: 5,
    justifyContent: "flex-start",
    textTransform: "capitalize",
  },
  rating: {
    flexDirection: "row",
    marginLeft: 5,
    marginVertical: 10,
  },
});

export default Restaurants;
