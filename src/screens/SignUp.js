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
  Alert,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Feather } from "@expo/vector-icons";

// import Firebase
import auth from "@react-native-firebase/auth";
import { authentication } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const SignUpScreen = ({ navigation }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const RegisterUser = () => {
    const dbName = Math.random().toString();

    createUserWithEmailAndPassword(authentication, userEmail, userPassword)
      .then((user) => {
        console.log(user);
        setIsSignedIn(true);
        Alert.alert("User registration Sucessfull, Please Login");
        if (!user == null) {
          auth().currentUser.updateProfile({
            displayPhone: userPhone,
            displayEmail: userEmail,
          });
        }
        navigation.navigate("signin");

        //Database setup
        const email = userEmail;
        const phone = userPhone;
        const password = userPassword;

        setDoc(doc(db, "name", dbName), {
          Email: email,
          Phone: phone,
          Password: password,
        });
      })
      .catch((re) => {
        console.log(re);
        navigation.navigate("signin");
      });
  };
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
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="Email"
              style={styles.textinput}
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
              placeholderTextColor={COLORS.white}
            />
            <TextInput
              placeholder="Contact Number"
              style={styles.textinput}
              keyboardType="numeric"
              blurOnSubmit={false}
              value={userPhone}
              onChangeText={(text) => setUserPhone(text)}
              placeholderTextColor={COLORS.white}
            />
            {console.log("Line 1", userPhone)}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.textinput2}>
                <TextInput
                  secureTextEntry={isPasswordShow ? false : true}
                  placeholder="Password"
                  value={userPassword}
                  onChangeText={(text) => setUserPassword(text)}
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
            <TouchableOpacity onPress={RegisterUser}>
              <View style={styles.button1}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("signin")}>
              <Text style={styles.text}>
                Already have an account? | Sign In
              </Text>
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
    marginTop: 50,
  },
});

export default SignUpScreen;
