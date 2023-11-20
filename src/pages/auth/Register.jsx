import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Base } from "../../components/PageBase";
import { clr } from "../../components/ContantsColor";
import { View, Text } from "react-native";
import CustomButton from "../../components/Btn";
import Filed from "../../components/inputFiled";
import Icon from "react-native-vector-icons/Ionicons";
import { Shadow } from "react-native-shadow-2";
import { CreateAccount } from "../../api/auth";
import { notification } from "../../utils/commonUtils";
import Spinner from "react-native-loading-spinner-overlay";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
GoogleSignin.configure();
const Register = ({ navigation }) => {
  const [spin, setSpin] = useState(false);
  const [war, setWar] = useState({
    NM: {
      value: "",
      warMsg: "Please enter your name",
      display: "none",
    },
    CM: {
      value: "",
      warMsg: "Please enter your company name",
      display: "none",
    },
    PD: {
      value: "",
      warMsg: "Please enter your password",
      display: "none",
    },
    EM: {
      value: "",
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
    let user = { ...war };
    setSpin(true);
    console.log(user);
    if(user.NM.value && user.PD.value && user.EM.value){
      let userInfo = {
        firstName:user.NM.value.split(" ")[0],
        lastName:user.NM.value.split(" ").length>1 ? user.NM.value.split(" ")[1]:"",
        password:user.PD.value,
        company:user.CM.value,
        email:user.EM.value
      }
      let res = await CreateAccount(userInfo);
      console.log("res=======",res);
      if (res.user) {
        notification("You are register successfully!");
        navigation.navigate("SignIn", {});
        setSpin(false);
      }
    } else {
      notification("Please fill all mandatory fields.");
      user["EM"].warMsg = "Please enter valid email.";
      user["PD"].warMsg = "Please enter valid pasword.";
      user["NM"].warMsg = "Please enter your name.";
      user["EM"].display = "flex";
      user["PD"].display = "flex";
      user["NM"].display = "flex";
      setData({});
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

  const back = () => {
    navigation.goBack()
  }

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
        <Text
          style={{
            ...styles.title,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Create Your Account
        </Text>
        <Filed
          warning={war.NM}
          containerHeight={70}
          name="NM"
          placeholder="Name"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Filed
          warning={war.CM}
          containerHeight={70}
          name="CM"
          placeholder="Company Name"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />

        <Filed
          warning={war.EM}
          containerHeight={70}
          name="EM"
          placeholder="Email"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />

        <Filed
          warning={war.PD}
          containerHeight={90}
          name="PD"
          placeholder="Password"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <CustomButton
          text={
            <View style={{ flex: 1, flexDirection: "row" }}>
              {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
              <Text style={styles.buttontext}> Register </Text>
            </View>
          }
          buttonStyle={{
            height: 45,
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
      <Spinner visible={spin} size={80} color="#EC3C3F"/>
      <View
        style={{
          height: 50,
          width: "100%",
        }}
      >
        {
          <Text style={{ fontSize: 20, fontWeight: "bold" }} onPress={back}>
            {" "}
            <Image
              style={styles.backButton}
              source={require("../../assets/Images/back.png")}
            />
          </Text>
        }
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/Images/logo.png")}
      />
      {!prm ? formCard() : null}
      {!prm ? GoogleLoginBtn() : null}
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
    marginBottom: 5,
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
    marginBottom: 20,
  },
  backButton: {
    alignSelf: "center",
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
    lineHeight: 25,
    color: "green",
    textDecorationLine: "underline",
  },
  buttontext3: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 25,
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

export default Register;
