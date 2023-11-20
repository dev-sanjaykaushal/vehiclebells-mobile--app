import React from "react";
import {Text, StyleSheet, TextInput, View} from "react-native"
import { clr } from "../components/ContantsColor";
import Icon from 'react-native-vector-icons/Ionicons';

const Filed = (props) => {
    return(
        <View style={{...styles.container, height: props.containerHeight}}>
            <TextInput 
                inputMode={props.inputMode}     
                style={
                    {
                        ...styles.text, 
                        height: props.height, 
                        borderColor: props.warning.display == "flex"? clr.warning :clr.inputBorder}} 
                placeholder={props.placeholder}
                textAlign={"left"}
                textAlignVertical={"top"}
                placeholderTextColor={clr.placeholder}
                value={props.warning.vlaue}
                onChangeText={(text)=>props.onChange({value: text, name: props.name})}
            />
            <View style={{...styles.textCont, display: props.warning.display}}>
                <Icon name="alert-circle" size={18} color={clr.warning} />
                <Text style={styles.warningText}>{props.warning.warMsg}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginBottom:2,
        // paddingTop: 20,
        paddingHorizontal: 10
        
    },
    textCont: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "center"
    },
    text: {
        color: clr.text,
        borderWidth: 1,
        borderColor: clr.inputBorder,
        paddingHorizontal:10,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: clr.white,
        width: 283,
        alignSelf: "center"
        // marginBottom: 10
    },
    warningText: {
        lineHeight: 20,
        color: clr.warning,
        fontWeight: "bold",
        fontSize: 14
    }
}) 

export default Filed