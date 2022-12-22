import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const SignInScreen = ({ navigation }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign into continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Username"
              style={styles.textinput}
              placeholderTextColor={COLORS.white}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={styles.textinput2}>
                <TextInput
                  secureTextEntry={isPasswordShow ? false : true}
                  placeholder="Password"
                  placeholderTextColor={COLORS.white}
                />
                <Feather
                  name={isPasswordShow ? "eye" : "eye-off"}
                  size={22}
                  color={COLORS.grey}
                  style={{
                    marginLeft: 300,
                    marginTop: 20,
                    position: "absolute",
                  }}
                  onPress={() => setIsPasswordShow(!isPasswordShow)}
                />
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("details")}>
              <View style={styles.button1}>
                <Text style={styles.btnText}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("forgotpwd")}>
              <Text style={styles.text}>
                Forgot your password? | Click here
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={styles.text}>Don't have an account? | Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h1 * 1.5,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    paddingTop: 3,
  },
  dataContainer: {
    marginTop: 50,
  },
  textinput: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textinput2: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    borderBottomColor: COLORS.lightGrey,
    width: 380,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btnContainer: {
    marginTop: 50,
  },
  button1: {
    backgroundColor: COLORS.primary,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.h4,
  },
  button2: {
    flexDirection: "row",
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginRight: 10,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    fontSize: SIZES.h5,
  },
  bottomContainer: {
    justifyContent: "center",
    marginTop: 27,
  },
});

export default SignInScreen;
