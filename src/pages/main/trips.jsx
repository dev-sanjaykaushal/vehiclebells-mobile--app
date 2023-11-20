import React, { useEffect, useState } from "react";
import { withTheme } from "react-native-paper";
import LocationsRouter from "../../router/locationsRoutes";
import { View, Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Chip,
  FAB,
  SegmentedButtons,
  Checkbox
} from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  AnimatedFAB,
  ScrollView,
} from "react-native";
import { clr } from "../../components/ContantsColor";
import { GetAllTrips } from "../../api/trip";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";
import Datanotfound from "../../components/DataNotFound";
import { Picker } from "@react-native-picker/picker";
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
  }
});
function Trips({ theme }) {
  const [value, setValue] = useState("");
  const [trips, setTrips] = useState([]);
  const [isExtended, setIsExtended] = React.useState(true);
  const [spin, setSpin] = useState(false);
  const [war, setWar] = useState({
    EM: {
      value: "",
      warMsg: "Please enter your email",
      display: "none",
    },
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    getAllTrips();
  }, []);
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

  const handleChange = (value) => {
    setSelectedValue(value);
  };


  async function getAllTrips() {
    setSpin(true);
    let user = await AsyncStorage.getItem("userInfo");
    user = JSON.parse(user);
    let res = await GetAllTrips(user.id);
    console.log("res=====", res);
    if (res && Array.isArray(res)) {
      setTrips(res);
    }
    setSpin(false);
  }
  //const fabStyle = { [animateFrom]: 16 };
  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={spin} size={80} color="#EC3C3F" />
      <View>
      {!modalVisible ?(
        <SegmentedButtons
          style={{ margin: 15 }}
          value={value}
          onValueChange={setValue}
          checkedColor="#EC3C3F" // Set the checked color to yellow
          uncheckedColor="#fff"
          buttons={[
            {
              value: "Personal",
              label: "Personal",
            },
            {
              value: "Business",
              label: "Business",
            },
          ]}
        />):null}
        <ScrollView onScroll={onScroll}>
        {modalVisible ? (
            addTripModal()
          ) : (
            <>
          {trips.length ? (
            <>
              {trips.map((item, i) => {
                <Card style={{ margin: 5, borderRadius: 10 }}>
                  {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                  <Card.Content style={{ backgroundColor: "#fff" }}>
                    <Title
                      style={{
                        color: "#0a1c31",
                        fontSize: 22,
                        fontWeight: "800",
                      }}
                    >
                      Chandigarh To Delhi
                    </Title>
                    <View>
                      <Title>Distance: 90KM </Title>
                      <Chip
                        icon="information"
                        onPress={() => console.log("Pressed")}
                      >
                        Jul-24-2019 To Jul-25-2019{" "}
                      </Chip>
                    </View>
                    <View>
                      <Chip
                        mode="outlined"
                        style={{
                          width: 120,
                          marginTop: 14,
                          borderColor: "#EC3C3F",
                          backgroundColor: "#EC3C3F",
                        }}
                      >
                        <Text style={{ color: "#fff" }}>Bussiness</Text>
                      </Chip>
                      <Title style={{ fontSize: 16, fontWeight: "800" }}>
                        REG NO: HP-22A1234{" "}
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
  function addTripModal() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            ...styles.title,
            textAlign: "center",
          }}
        >
          Add Trip
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            color: clr.cross,
            fontWeight: "500",
          }}
        >
          (Trip Information)
        </Text>

        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Start"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />

        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="End"
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
          <Picker.Item label="Choose Vehicle" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
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
          <Picker.Item label="Trip Type" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Note"
          height={60}
          inputMode="search"
          onChange={handleChanges}
        />
        <Filed
          warning={war.EM}
          containerHeight={60}
          name="EM"
          placeholder="Tags"
          height={45}
          inputMode="search"
          onChange={handleChanges}
        />
        <Checkbox.Item
          label="Round Trip"
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

export default withTheme(Trips);
