import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { clr } from '../../components/ContantsColor';

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

// RN Code
const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Header = ({props}) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>hello</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: clr.white,
        height: 56,
        shadowColor: clr.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    flexContainer: {
        flex: 1,
        marginHorizontal: "auto"
    },
    row: {
        borderColor:  "#fff",
        flexDirection: "row",
        height: "100%"
    },
    "1col":  {
        flex:  1,
        justifyContent: 'center',
        padding: 2,
      },
    "2col":  {
        flex:  2,
        justifyContent: 'center',
        padding: 2,
    },
    "3col":  {
        flex:  3,
        justifyContent: 'center',
        padding: 2,
    },
    text: {
        color: clr.text
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})


export default Header;