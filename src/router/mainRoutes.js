import React, { useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { Appbar, Portal, Dialog, Paragraph, Button,IconButton } from 'react-native-paper';
import Trips from "../pages/main/trips";
import Vehicles from "../pages/main/vehicles";
import Home from "../pages/main/home";
import Teams from "../pages/main/teams";
import Expenses from "../pages/main/expenses";
import { Text, View, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Attendance from "../pages/main/attendance";
import Settings from "../pages/main/settings";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationRoutes from './locationsRoutes'
import AuthRoutes from './authRoutes';
const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#fff",
    width: 240,
    fontSize: 16,
  },
  drawerActiveBackgroundColor: "#EC3C3F",
  drawerActiveTintColor: "#fff",
  headerStyle: {
    height: 70,
    backgroundColor: "#EC3C3F",
  },
  headerTitleStyle: {
    fontSize: 24,
    color: "#fff",
    margin: 0,
    padding: 0,
  },
  userInfoContainer: {
    padding: 16,
    textAlign: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  userEmail: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "lightgray",
  },
});


async function LogutScreen(){
  const navigation = useNavigation();
  await AsyncStorage.removeItem('userInfo');
  navigation.navigate("SignIn");
}

const Drawer = createDrawerNavigator();

const MainMenu = () => {

  useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
    },1000)
    setLoginUserInfo()
  }, []);
  
  const [userInfo, setUserInfo] = useState({
    firstName:"",
    lastName:"",
    email:"",
  });

  async function setLoginUserInfo(){
    let user = await AsyncStorage.getItem('userInfo');
    user = JSON.parse(user);
    let u = {...userInfo};
    u["firstName"]=user.firstName;
    u["lastName"]=user.lastName;
    u["email"]=user.email;
    setUserInfo(u);
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#0a1c31",
          width: 240,
          fontSize: 16,
        },

        drawerInactiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#050e18",
        drawerActiveTintColor: "#fff",
        // drawerStyle: styles.drawerStyle,
        // drawerActiveBackgroundColor:styles.drawerActiveBackgroundColor,
        // drawerActiveTintColor:styles.drawerActiveTintColor,
        drawerIcon: ({ color, size }) => (
          <Icon name="menu" size={size} color="white" /> // Set color to white
        ),
        headerRight: () => (
          // Your notification icon component goes here
          <IconButton icon="bell" iconColor="#fff" onPress={() => console.log('Notification icon pressed')} />
        ),
        
      }}
      drawerLabelStyle={{
        fontSize: 28
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          {/* User information section */}
          <View style={styles.userInfoContainer}>
            <Icon name="person-circle-outline" color="white" size={65} />
            <Text style={styles.userName}>{userInfo.firstName} {userInfo.lastName}</Text>
            <Text style={styles.userEmail}>{userInfo.email}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Menu items */}
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >

      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="home" color="white" size={24} />
          ),
        }}
        name="Home"
        component={LocationRoutes}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="rocket" color="white" size={24} />
          ),
        }}
        name="Trips"
        component={Trips}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="car-sport-sharp" color="white" size={24} />
          ),
        }}
        name="Vehicles"
        component={Vehicles}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="wallet" color="white" size={24} />
          ),
        }}
        name="Expenses"
        component={Expenses}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="people-sharp" color="white" size={24} />
          ),
        }}
        name="Teams"
        component={Teams}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="timer" color="white" size={24} />
          ),
        }}
        name="Attendance"
        component={Attendance}
      />

      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="settings" color="white" size={24} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
      <Drawer.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          drawerIcon: ({ color, size, focused }) => (
            <Icon name="power-outline" color="white" size={24} />
          ),
          headerShown:false
        }}
        name="LogOut"
        component={AuthRoutes}
        
      />
    </Drawer.Navigator>
  );
};

export default MainMenu;
