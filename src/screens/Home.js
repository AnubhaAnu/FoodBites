import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import Restaurants from "../components/Restaurants";
//import zomato from "../data/zomato.json";
import data from "../data/data.json";

const HomeScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const searchData = (text) => {
    const newData = data.restaurants.filter((item) => {
      const itemData = item.location.city.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });

    setProduct(newData);
    setText(text);
  };
  //console.log("product-", product);

  const filterData = (price_range) =>
    data.restaurants.filter((result) => result.price_range === price_range);

  return (
    <View>
      <View style={styles.top}>
        <View style={styles.tab}>
          <Text style={styles.text}>Find The Best Restaurants</Text>
          <MaterialIcons
            name="account-circle"
            size={24}
            color={COLORS.white}
            style={{ padding: 9, marginLeft: 65 }}
          />
        </View>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={24} color={COLORS.grey} />
          <TextInput
            onChangeText={(text) => searchData(text)}
            value={text}
            placeholder="what you like to eat"
            styles={styles.search}
          />
        </View>
      </View>

      <ScrollView>
        <Restaurants title="Cost Effective" data={filterData(1)} />
        <Restaurants title="Bit Pricer" data={filterData(2)} />
        <Restaurants title="Big Spender" data={filterData(3)} />
        <View style={{ height: 167 }} />
      </ScrollView>
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
    flexDirection: "row",
  },
  text: {
    padding: 6,
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
  searchBox: {
    flexDirection: "row",
    width: SIZES.width - 40,
    backgroundColor: COLORS.white,
    padding: 10,
    marginLeft: 6,
    borderRadius: 5,
  },
  search: {
    marginLeft: 10,
    color: COLORS.title,
  },
});

export default HomeScreen;
