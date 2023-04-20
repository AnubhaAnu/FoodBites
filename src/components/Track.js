import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/theme";
export default function TrackScreen() {
  const navigation = useNavigation();
  const [prepared, setPrepared] = useState(false);
  const [orderReady, setOrderReady] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const trackOrder = () => {
    setPrepared(true);
    setOrderReady(false);
    setDelivered(false);

    setTimeout(() => {
      setOrderReady(true);
      setPrepared(false);
      setDelivered(false);
    }, 7000);
    setTimeout(() => {
      setDelivered(true);
      setPrepared(false);
      setOrderReady(false);
    }, 7000);
  };
  return (
    <View style={Styles.maincontainer}>
      <TouchableOpacity onPress={() => trackOrder()} style={Styles.button}>
        <Text style={Styles.buttonTextStyle}>Track Order Details</Text>
      </TouchableOpacity>
      {prepared && (
        <Text style={Styles.renderDetails}>
          Your Food🫕🫕 Order is being Prepared...
        </Text>
      )}
      {orderReady && (
        <Text style={Styles.renderDetails}>
          Food is Ready waiting for Delivery🚚 agent...{" "}
        </Text>
      )}
      {delivered && (
        <Text style={Styles.renderDetails}>
          Your ordered is delivered!!!Enjoy your Meal🍜🍜{" "}
        </Text>
      )}
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("Food")}
      >
        <Text style={Styles.buttonTextStyle}>Hungry Again</Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    padding: 12,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.grey,
    borderRadius: 10,
  },
  buttonTextStyle: { fontSize: 20, fontWeight: "bold", color: COLORS.white },
  renderDetails: { fontSize: 20, fontWeight: "bold", marginHorizontal: 15 },
});
