import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { List, Divider, Avatar, withTheme, Chip } from "react-native-paper";
const TeamListPage = () => {
  // Sample user data
  const users = [
    {
      id: "1",
      name: "Bike Team",
      avatar:
        "https://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png",
      role: "Owner",
      inviteCount:10,
      membersCount:20
    },
    {
      id: "2",
      name: "Car Team ",
      avatar:
        "https://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png",
      role: "Member",
      inviteCount:10,
      membersCount:20
    },
    {
      id: "3",
      name: "Truck Team",
      avatar:
        "https://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png",
      role: "Manager",
      inviteCount:10,
      membersCount:20
    },
    {
      id: "4",
      name: "Travel turist",
      avatar:
        "https://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png",
      role: "Member",
      inviteCount:10,
      membersCount:20
    },
    // Add more user data here
  ];

  // Render each user item in the list
  const renderUserItem = ({ item }) => (
    <List.Item
      style={styles.list}
      titleStyle={styles.titleStyle}
      title={item.name}
      left={(props) => <Avatar.Image source={{ uri: item.avatar }} size={84} />}
      description={`Invited Count: ${item.inviteCount} \nMember Count: ${item.membersCount}`}
      descriptionStyle={styles.descriptionStyle}
      right={(props) => (
        <Chip style={styles.chip} onPress={() => console.log("Pressed")}>
          <Text style={styles.chipText}>{item.role}</Text>
        </Chip>
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
    fontSize: 18,
    fontWeight: "900",
  },
  chip: {
    backgroundColor: "#ddd",
    height: 35,
  },
  chipText: {
    color: "#000",
    fontSize: 16,
  },
  descriptionStyle:{
    fontWeight:"700",
  }
});

export default withTheme(TeamListPage);
