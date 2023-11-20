import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, 
    SafeAreaView, 
    ScrollView,
    Dimensions
} from 'react-native';
import { clr } from './ContantsColor';
// import { dark } from '../assets/ContantsColor';
const Base = ({children}) => {
    const windowHeight = Dimensions.get('window').height
    return (

            <SafeAreaView style={{backgroundColor: clr.white}}>
                <ScrollView>
                <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                    <View style={{...styles.container, minHeight: windowHeight}}>
                        
                        {children}  
                    </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
      );
}

const Base2 = ({children}) => {
    const windowHeight = Dimensions.get('window').height
    return (

            // <SafeAreaView style={{backgroundColor: clr.white}}>
                
            //     <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            //         <ScrollView>
                        <View style={{...styles.container, minHeight: windowHeight}}>
                            {children}  
                        </View>
            //         </ScrollView>
            //     </TouchableWithoutFeedback>
                
            // </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: clr.white,
        // justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
        // paddingBottom: 50,
        // backgroundColor: "red",
    }
})

export { Base, Base2 }