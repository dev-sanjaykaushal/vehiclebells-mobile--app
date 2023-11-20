import React from "react";
// import { Platform, ToastAndroid } from "react-native";
import Toast from "react-native-simple-toast";
import { clr } from "../components/ContantsColor";
const notification = (msg) => {
    // console.log(Platform)

    Toast.showWithGravity(
        msg,
        Toast.LONG,
        Toast.TOP,
        {
         backgroundColor: clr.warning,
        }
      );
}

export {
    notification
}