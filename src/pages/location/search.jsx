import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Text, Appbar, withTheme,Searchbar  } from "react-native-paper";
import Filed from "../../components/inputFiled";
import CustomButton from "../../components/Btn";
import Icon from "react-native-vector-icons/Ionicons";
const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const handleSearch = () => {
    // Perform your search action with the searchText
    console.log("Performing search for:", searchText);
    // You can implement your search logic here, e.g., making an API request.
  };

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.inputButtonContainer}>
        <Searchbar
         placeholder="Search"
         onChangeText={onChangeSearch}
         value={searchQuery}
         style={{backgroundColor:"#fff"}}
       />
        </View>
        <View style={styles.iconContainer}>
          <View><Text style={styles.searchResult}><Icon name="airplane" size={34} color="#FFF" /></Text>
          <Text style={styles.iconName}>Air port</Text></View>
          
          <View><Text style={styles.searchResult}><Icon name="bus-sharp" size={34} color="#FFF" /></Text>
          <Text style={styles.iconName}>Bus Stand</Text>
          </View>
          <View><Text style={styles.searchResult}><Icon name="restaurant-sharp" size={34} color="#FFF" /></Text>
          <Text style={styles.iconName}>Restaurant</Text>
          </View>

          
            {/* Add more icons as needed */}
      </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",

  },
  inputButtonContainer: {
    alignItems: "center",
  },
  appbar: {
    backgroundColor: "#0a1c31",
    color: "#fff",
  },
  content: {
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
  },
  buttontext: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 28,
    color: "#fff",
  },
  iconContainer: {
    flexDirection: 'row', // Display icons in one line
    marginTop:20,
    overflow:"scroll",

    marginBottom:20,
    marginRight: 8,
  },
  searchResult: {
    margin: 20,
    padding:20,
    backgroundColor:"#0a1c31",
    borderColor:"#0a1c31",
    borderRadius:10
  },
  iconName:{
    fontWeight:"900",
    textAlign:"center",
    fontSize:16
  }
});

export default withTheme(SearchScreen);
