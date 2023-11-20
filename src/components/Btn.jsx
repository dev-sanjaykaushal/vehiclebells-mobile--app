import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { clr } from "./ContantsColor";

const CustomButton = (props) => {
    return(
        <TouchableOpacity 
        style={
            {
                ...styles.container, 
                height: props.buttonStyle.height,
                width: props.buttonStyle.width,
                backgroundColor: props.buttonStyle.backgroundColor,
                paddingHorizontal: props.buttonStyle.h? props.buttonStyle.h:15,
                paddingVertical: props.buttonStyle.v? props.buttonStyle.v:10,
                marginBottom: props.buttonStyle.marginBottom?props.buttonStyle.marginBottom:0
            }
        } onPress={() => props.onPress()} >
            <View>{props.text}</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 10
    }
})

export default CustomButton;