import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import PaymentView from "../components/PaymentView";

const PaymentScreen = ({ navigation }) => {
  const [response, setResponse] = useState();
  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const cartInfo = {
    id: "sk_test_51M7tRKSI9tmZjKZGAYOM4wlYTs32zTfgwI56Ns3yH94c5kokHNk80SPFmKRlpldwnbKnT7is9BAhQZ1BRaGdCJvB00mwVHYIST",
    description: "Cajuns",
    amount: 7,
  };

  const onCheckStatus = async (paymentResponse) => {
    setPaymentStatus("Please wait while confirming your payment!");
    setResponse(paymentResponse);
  };

  const paymentUI = () => {
    if (!makePayment) {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 25, margin: 10 }}>Make Payment</Text>
          <Text style={{ fontSize: 16, margin: 10 }}>
            Product Description: {cartInfo.description}
          </Text>
          <Text style={{ fontSize: 16, margin: 10 }}>
            Payable Amount: ${cartInfo.amount}
          </Text>
          <View>
            <TouchableOpacity
              style={{
                height: 60,
                width: 300,
                backgroundColor: "#ff5733",
                borderRadius: 5,
                marginBottom: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setMakePayment(true);
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Card Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                width: 300,
                backgroundColor: "#ff5733",
                borderRadius: 5,
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Alert.alert("Oder Confirmation", "Order successful 🎊🎊", [
                  {
                    text: "Track Order",
                    onPress: () => {
                      navigation.navigate("Track");
                    },
                  },
                ]);
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>
                Cash On Delivery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      if (response !== undefined) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 25, margin: 10 }}>{paymentStatus}</Text>
            <Text style={{ fontSize: 16, margin: 10 }}>{response}</Text>
          </View>
        );
      } else {
        return (
          <PaymentView
            onCheckStatus={onCheckStatus}
            product={cartInfo.description}
            amount={cartInfo.amount}
          />
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.navigation}>
        <Text>Hii</Text>
      </View>
      <View style={styles.body}>
        <Text>Payment</Text>
      </View>
      <View style={styles.footer}>
        <Text>Foot</Text>
      </View> */}
      {/* <PaymentView
        onCheckStatus={onCheckStatus}
        product={cartInfo.description}
        amount={cartInfo.amount}
      /> */}
      {paymentUI()}
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  navigation: {
    flex: 2,
    backgroundColor: "red",
  },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
