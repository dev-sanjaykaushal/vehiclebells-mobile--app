import React, { useEffect, useState } from "react";
import { withTheme } from "react-native-paper";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  Card,
  Title,
  Chip,
  FAB,
  Avatar,
  Checkbox,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { GetAllVehicles } from "../../api/vehicle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";
import Datanotfound from "../../components/DataNotFound";
import { clr } from "../../components/ContantsColor";
import Filed from "../../components/inputFiled";
import CustomButton from "../../components/Btn";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#EC3C3F",
    color: "#fff",
    rippleColor: "#fff",
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
function Vehicles({ theme }) {
  const [isExtended, setIsExtended] = React.useState(true);
  const [spin, setSpin] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [war, setWar] = useState({
    EM: {
      value: "",
      warMsg: "Please enter your email",
      display: "none",
    },
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  async function getAllVehicles() {
    setSpin(true);
    let user = await AsyncStorage.getItem("userInfo");
    user = JSON.parse(user);
    console.log("user==========", user);
    let res = await GetAllVehicles(user.id);
    console.log("res=====", res);
    if (res && Array.isArray(res)) {
      setVehicles(res);
    }
    setSpin(false);
  }
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
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

  const onSubmit = async () => {
    let a = { ...war };

    setWar(a);
  };

  //const fabStyle = { [animateFrom]: 16 };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Spinner visible={spin} size={80} color="#EC3C3F" />
        <ScrollView onScroll={onScroll}>
          {modalVisible ? (
            addVechicleModal()
          ) : (
            <>
              {vehicles.length ? (
                <>
                  {vehicles.map((item, i) => {
                    <Card
                      key={"vehi_" + i}
                      style={{ margin: 20, borderRadius: 10 }}
                    >
                      <Card.Content style={{ backgroundColor: "#0a1c311c" }}>
                        <Title
                          style={{
                            color: "#0a1c31",
                            fontSize: 22,
                            fontWeight: "800",
                          }}
                        >
                          Moter BIKE
                        </Title>
                        <View>
                          <Title style={{ fontWeight: "500" }}>
                            Avg: 90 per liter{" "}
                          </Title>
                          <Chip
                            icon="information"
                            onPress={() => console.log("Pressed")}
                          >
                            Hp-22AP-7879890
                          </Chip>
                        </View>
                        <View>
                          <Chip
                            mode="outlined"
                            style={{
                              width: 80,
                              marginTop: 14,
                              borderColor: "#0a1c31",
                              backgroundColor: "#0a1c31",
                            }}
                          >
                            <Text style={{ color: "#fff" }}>Petrol</Text>
                          </Chip>
                          <Title style={{ fontSize: 16, fontWeight: "800" }}>
                            Odometer Reading : 3434343433{" "}
                          </Title>
                        </View>
                      </Card.Content>
                    </Card>;
                  })}
                </>
              ) : (
                <Datanotfound />
              )}
            </>
          )}
        </ScrollView>
      </View>
      {!modalVisible ? (
        <FAB
          icon="plus"
          style={styles.fab}
          color="#fff"
          onPress={() => setModalVisible(true)}
        />
      ) : null}
    </SafeAreaView>
  );

  function addVechicleModal() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            ...styles.title,
            textAlign: "center",
          }}
        >
          Add New Vehicle
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            color: clr.cross,
            fontWeight: "500",
          }}
        >
          (Vehicle Information)
        </Text>

        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => handleChange(itemValue)}
          style={{
            marginLeft: 65,
            marginRight: 65,
            backgroundColor: "#fff",
            marginBottom: 20,
            borderColor: "#000",
            border: 1,
          }}
        >
          <Picker.Item label="Vehicle Type" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Manufacturer Company"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />

        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => handleChange(itemValue)}
          style={{
            marginLeft: 65,
            marginRight: 65,
            backgroundColor: "#fff",
            marginBottom: 20,
            height: 45,
            borderColor: "#000",
            border: 1,
          }}
        >
          <Picker.Item label="Fuel Type" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Model(Optional)"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Vehicle Registration"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Average (Optional/Manual/By Default)"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Odometer Reading"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Checkbox.Item
          label="Make This Vehicle Default"
          style={{
            marginLeft: 65,
            marginRight: 65,
            backgroundColor: "#fff",
            marginBottom: 20,
            height: 45,
            borderColor: "#000",
            border: 1,
          }}
          status={"checked"}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 35,
            marginRight: 35,
            marginBottom: 35,
          }}
        >
          <CustomButton
            text={
              <View style={{ flex: 1, flexDirection: "row" }}>
                {/* <Text style={styles.buttontext}><Icon name="search" size={16} /></Text> */}
                <Text style={styles.buttontext}> Back </Text>
              </View>
            }
            buttonStyle={{
              height: 48,
              width: 150,
              backgroundColor: "#0a1c31",
            }}
            onPress={() => setModalVisible(false)}
            textStyle={styles.buttontext}
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
              width: 150,
              backgroundColor: clr.button,
            }}
            onPress={onSubmit}
            textStyle={styles.buttontext}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(Vehicles);
