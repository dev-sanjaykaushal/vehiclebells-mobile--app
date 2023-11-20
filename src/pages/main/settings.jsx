import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Appbar, withTheme } from "react-native-paper";
import CustomButton from "../../components/Btn";
import Filed from "../../components/inputFiled";
const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [war, setWar] = useState({
    NM: {
      value: "",
      warMsg: "Please enter your Name",
      display: "none",
    },
    EM: {
      value: "",
      warMsg: "Please enter your email",
      display: "none",
    },
    PH: {
      value: "",
      warMsg: "Please enter your Phone",
      display: "none",
    },
    CM: {
      value: "",
      warMsg: "Please enter your Company",
      display: "none",
    },
  });
  const handleUpdateProfile = () => {
    // Implement your logic to update the user's profile
    // You can send the data to your server, update the local state, etc.
  };

  const handleChanges = (e) => {};

  return (
    <View style={styles.container}>
      <ScrollView>
        <Appbar.Header
          style={{ backgroundColor: "#0a1c31" }}
          mode="center-aligned"
        >
          <Appbar.Content
            titleStyle={{ color: "#fff" }}
            title="Update Profile"
          />
        </Appbar.Header>

        <View style={styles.upFrom}>
          <Filed
            warning={war.EM}
            containerHeight={60}
            name="EM"
            placeholder="Email"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />

          <Filed
            warning={war.NM}
            containerHeight={60}
            name="NM"
            placeholder="Name"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />

          <Filed
            warning={war.EM}
            containerHeight={60}
            name="EM"
            placeholder="Email"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />
          <Filed
            warning={war.CM}
            containerHeight={60}
            name="CM"
            placeholder="Company"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />
          <Filed
            warning={war.PH}
            containerHeight={60}
            name="CM"
            placeholder="Company"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />

          <CustomButton
            text={
              <View style={{ flex: 1, flexDirection: "row" }}>
                {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
                <Text style={styles.buttontext}> Update Profile </Text>
              </View>
            }
            buttonStyle={{
              height: 48,
              width: 187,
              backgroundColor: "#EC3C3F",
            }}
            onPress={handleUpdateProfile}
            textStyle={{ color: "#fff" }}
          />
        </View>
        <Appbar.Header
          style={{ backgroundColor: "#0a1c31" }}
          mode="center-aligned"
        >
          <Appbar.Content
            titleStyle={{ color: "#fff" }}
            title="Change Password"
          />
        </Appbar.Header>
        <View style={styles.cpFrom}>
          <Filed
            warning={war.EM}
            containerHeight={60}
            name="EM"
            placeholder="Email"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />

          <Filed
            warning={war.NM}
            containerHeight={60}
            name="NM"
            placeholder="Name"
            height={48}
            inputMode="search"
            onChange={handleChanges}
          />
          <CustomButton
            text={
              <View style={{ flex: 1, flexDirection: "row" }}>
                {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
                <Text style={styles.buttontext}> Change Password </Text>
              </View>
            }
            buttonStyle={{
              height: 48,
              width: 187,
              backgroundColor: "#EC3C3F",
            }}
            onPress={handleUpdateProfile}
            textStyle={{ color: "#fff" }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  upFrom: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  cpFrom: {
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    marginBottom: 16,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  buttontext: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 28,
    color: "#fff",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 15,
    fontSize: 16,
    color: "#fff",
  },
});

export default withTheme(Settings);
