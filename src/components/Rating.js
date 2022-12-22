import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const Rating = ({ count }) => {
  const [starCount] = useState(count);
  const rating = [];

  function isInt(n) {
    return n % 1 === 0;
  }

  for (let i = 0; i < starCount - 1; i++) {
    rating.push(<FontAwesome name="star" size={15} color={COLORS.yellow} />);
  }

  {
    !isInt(starCount) &&
      rating.push(
        <FontAwesome name="star-half-empty" size={15} color={COLORS.yellow} />
      );
  }

  for (let i = Math.ceil(rating.length); i < 5; i++) {
    rating.push(<FontAwesome name="star" size={15} color={COLORS.grey} />);
  }

  return <View style={styles.rating}>{rating}</View>;
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
  },
});

export default Rating;
