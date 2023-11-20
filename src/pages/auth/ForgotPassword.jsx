import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Base } from "../../components/PageBase";
import { clr } from "../../components/ContantsColor";
import { View, Text } from "react-native";
import CustomButton from "../../components/Btn";
import Filed from "../../components/inputFiled";
import { notification } from "../../utils/commonUtils";
import Spinner from "react-native-loading-spinner-overlay";
import { useRoute } from "@react-navigation/native";
const ForgotPassword = ({ navigation }) => {
  const [spin, setSpin] = useState(false);
  const [war, setWar] = useState({
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
    let a = { ...war };

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

  const back = () => {
    navigation.goBack()
  }

  const formCard = () => {
    return (
      <View style={styles.container}>
        <Text
          style={{
            ...styles.title,
            textAlign: "center",
          }}
        >
          Reset Your Password
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            color: clr.cross,
            fontWeight: "500",
          }}
        >
          (Enter your account email)
        </Text>
        <Filed
          warning={war.EM}
          containerHeight={70}
          name="EM"
          placeholder="Email"
          height={48}
          inputMode="search"
          onChange={handleChanges}
        />
        <CustomButton
          text={
            <View style={{ flex: 1, flexDirection: "row" }}>
              {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
              <Text style={styles.buttontext}> Submit </Text>
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
      <Spinner visible={spin} />
      <View
        style={{
          height: 70,
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }} onPress={back}>
          {" "}
          <Image
            style={styles.backButton}
            source={require("../../assets/Images/back.png")}
          />
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/Images/logo.png")}
      />

      {!prm ? formCard() : null}
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
  backButton: {
    alignSelf: "center",
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

export default ForgotPassword;
