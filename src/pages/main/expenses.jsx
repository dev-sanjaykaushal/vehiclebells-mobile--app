import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { List, Divider, Avatar, withTheme, Chip } from "react-native-paper";
const ExpensesListingPage = () => {
    const rupeeImage = 'https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg';
  // Sample user data
  const users = [
    {
      id: "1",
      name: "Chandigarh To Delhi",
      avatar:rupeeImage,
      price: "120.00",
      regNo:"HP-15A15678",
      distance:"120 KM"
    },
    {
      id: "2",
      name: "Chandigarh To Mumbai",
      avatar:rupeeImage,
      price: "142.00",
      regNo:"HP-15A15678",
      distance:"120 KM"
    },
    {
      id: "3",
      name: "Hamirpur To Chandigarh",
      avatar:rupeeImage,
      price: "20.00",
      regNo:"HP-15A15678",
      distance:"120 KM"
    },
    {
      id: "4",
      name: "Una To Mandi",
      avatar:rupeeImage,
      price: "245.00",
      regNo:"HP-15A15678",
      distance:"120 KM"
    },
    {
        id: "5",
        name: "Chandigarh To Delhi",
        avatar:rupeeImage,
        price: "120.00",
        regNo:"HP-15A15678",
        distance:"120 KM"
      },
      {
        id: "6",
        name: "Chandigarh To Mumbai",
        avatar:rupeeImage,
        price: "142.00",
        regNo:"HP-15A15678",
        distance:"120 KM"
      },
    // Add more user data here
  ];

  // Render each user item in the list
  const renderUserItem = ({ item }) => (
    <List.Item
      style={styles.list}
      titleStyle={styles.titleStyle}
      title={item.name}
      left={(props) => <Avatar.Image source={{ uri: item.avatar }} size={75} />}
      description={`Distance: ${item.distance} \nReg No : ${item.regNo}`}
      descriptionStyle={styles.descriptionStyle}
      right={(props) => ( <Text style={styles.price}>{item.price}</Text>
      )}
      onPress={() => {}}
    />
  );

  // Adjust the font size as per your preference

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  list: {
    backgroundColor: "#fff",
    marginBottom: 5,
    height: 120,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "900",
  },
  price:{
    fontWeight:"900",
    color:"#0a1c31"
  },
  descriptionStyle:{
    fontWeight:"700",
  }

});

export default withTheme(ExpensesListingPage);
