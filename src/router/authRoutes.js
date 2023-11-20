import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Linking, Alert, PermissionsAndroid} from "react-native";
import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Register from "../pages/auth/Register";
import SplashScreen from "react-native-splash-screen";
import Header from "../pages/header/header";
import MainMenu from "./mainRoutes";
const Stack = createNativeStackNavigator();
const route = () => {
    //const currentRoute = useRoute();
   
    useEffect(()=>{
        setTimeout(()=>{
        SplashScreen.hide();
        },1000)
    },[])
    
    return(
         <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    options={{
                        header: (props) => <Header props />
                    }}
                    name="SignIn" 
                    component={SignIn} /> 
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="MainMenu" component={MainMenu} />

            </Stack.Group>
         </Stack.Navigator>
    )
}

export default route;