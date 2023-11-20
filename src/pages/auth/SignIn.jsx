import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Base } from "../../components/PageBase";
import { clr } from "../../components/ContantsColor";
import { View, Text } from "react-native";
import CustomButton from "../../components/Btn";
import Filed from "../../components/inputFiled";
import Icon from "react-native-vector-icons/Ionicons";
import { Shadow } from "react-native-shadow-2";
import { Login } from "../../api/auth";
import { notification } from "../../utils/commonUtils";
import Spinner from "react-native-loading-spinner-overlay";
import { useRoute,useNavigation  } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from "moment";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
GoogleSignin.configure();
const SignIn = ({ navigation }) => {
  const [spin, setSpin] = useState(false);
  const [war, setWar] = useState({
    PD: {
      value: "123456",
      warMsg: "Please enter your password",
      display: "none",
    },
    EM: {
      value: "1234@gmail.com",
      warMsg: "Please enter your email",
      display: "none",
    },
  });
  const [data, setData] = useState({});
  const [prm, setPrm] = useState(false);
  const route = useRoute();
  useEffect(() => {
    if (route.params && route.params.data) {
      setData(route.params.data);
      setPrm(true);
    }
  }, []);

  const onSubmit = async () => {
    let a = { ...war };
    setSpin(true);
    if(a.EM.value && a.PD.value){
      let res = await Login({ email: a.EM.value, password: a.PD.value });
      if (res.success) {
        if (res.user) {
          await AsyncStorage.setItem('userInfo', JSON.stringify(res.user));
          navigation.navigate("MainMenu",res.user);
        }
        setSpin(false);
      } else {
        notification(res.msg);
        a["EM"].warMsg = "Please enter valid Email.";
        a["PD"].warMsg = "Please enter valid Pasword.";
        a["EM"].display = "flex";
        a["PD"].display = "flex";
        setData({});
        setSpin(false);
      }
    } else {
      notification("Please fill the fields");
      a["EM"].warMsg = "Please enter Email.";
      a["PD"].warMsg = "Please enter Pasword.";
      a["EM"].display = "flex";
      a["PD"].display = "flex";
      setSpin(false);
    }
    setWar(a);
  };

  const handleChanges = (e) => {
    let a = { ...war };

    a[e.name].value = e.value;

    if (a[e.name].value == "") {
      if (e.name == "EM") {
        a[e.name].warMsg = "Please enter valid Email.";
      }
      a[e.name].display = "flex";
    } else {
      a[e.name].warMsg = "";
      a[e.name].display = "none";
    }
    setWar(a);
  };

  const refreshData = () => {
    setPrm(false);
    setData({});
  };

  

  const RegisterPage = () => {
    navigation.navigate("Register", {
      pageName:"SignIn"
    });
  };

  const ForgotPasswordPage = () => {
    navigation.navigate("ForgotPassword", {
      pageName:"SignIn"
    });
  };

  const GoogleLoginBtn = () => {
    return (
      <View style={styles.GoogleSignBtn}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onSubmit}
        />
      </View>
    );
  };

  const formCard = () => {
    return (
      <View style={styles.container}>
        <Filed
          warning={war.EM}
          containerHeight={70}
          name="EM"
          placeholder="Email"
          height={48}
          inputMode="search"
          onChange={handleChanges}
        />

        <Filed
          warning={war.PD}
          containerHeight={90}
          name="PD"
          placeholder="Password"
          height={48}
          inputMode="search"
          onChange={handleChanges}
        />
        <CustomButton
          text={
            <View style={{ flex: 1, flexDirection: "row" }}>
              {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
              <Text style={styles.buttontext}> Login </Text>
            </View>
          }
          buttonStyle={{
            height: 48,
            width: 187,
            backgroundColor: clr.button,
          }}
          onPress={onSubmit}
          textStyle={styles.buttontext}
        />
      </View>
    );
  };

  return (
    <Base>
      <Spinner visible={spin} size={80} color="#EC3C3F" />
      <View
        style={{
          height: 70,
          width: "100%",

          alignItems: "center",
          // backgroundColor: "black"
        }}
      >
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/Images/logo.png")}
      />

      {!prm ? formCard() : null}

      {!prm ? GoogleLoginBtn() : null}

      <CustomButton
        text={
          <View style={{ flex: 1, flexDirection: "row" }}>
            {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
            <Text style={styles.buttontext}> No account? Create one </Text>
          </View>
        }
        buttonStyle={{
          height: 48,
          width: 180,
          backgroundColor: clr.button,
        }}
        onPress={RegisterPage}
        textStyle={styles.buttontext}
      />
      <Text
        style={{ color: "blue", marginTop: 3, textDecorationLine: "underline" }}
        onPress={ForgotPasswordPage}
      >
        Forgot password?
      </Text>
    </Base>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  GoogleSignBtn: {
    marginBottom: 20,
  },
  container2: {
    height: 250,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  container3: {
    backgroundColor: clr.white,
    height: 218,
    width: 337,
    borderRadius: 30,
    padding: 20,
  },
  image: {
    width: 250,
    height: 100,
    alignSelf: "center",
    marginBottom: 42,
  },
  buttontext: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 28,
    color: clr.buttonText,
  },
  buttontext2: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 28,
    color: "green",
    textDecorationLine: "underline",
  },
  buttontext3: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 28,
    color: "green",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    color: clr.text,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  col: {
    flex: 1,
    paddingLeft: 2,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 15,
    fontSize: 16,
    color: clr.text,
  },
});

export default SignIn;
