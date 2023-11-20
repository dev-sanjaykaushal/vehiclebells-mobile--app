import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";
import Home from "../pages/main/home";
import Search from "../pages/location/search";
import GoogleMap from "../pages/location/googleMap"; 


const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

const LocationRoutes = () => {
  return (
 
      <Tab.Navigator
        initialRouteName="TapHome"
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#0A1C31",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: "bold",
            paddingBottom:10,
          },
          tabBarStyle: [
            {
              display: "flex",
              height:70
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="TapHome"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown:false
          }}
          
        />
        <Tab.Screen
          name="NearMe"
          component={Search}
          options={{
            tabBarLabel: "Near Me",
            tabBarIcon: ({ color, size }) => (
              <Icon name="locate" color={color} size={size} />
            ),
            headerShown:false
          }}
          
        />
        <Tab.Screen
          name="RuningTrip"
          component={GoogleMap}
          options={{
            tabBarLabel: "Navigate",
            tabBarIcon: ({ color, size }) => (
              <Icon name="navigate-circle" color={color} size={size} />
            ),
            headerShown:false
          }}
        />
      </Tab.Navigator>

  );
};

export default LocationRoutes;
