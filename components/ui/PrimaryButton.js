import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


function PrimaryButton({children, pressHandler}) {

    return (<View style={styles.buttonOuterConainer}>
        <Pressable style={styles.buttonContainer}
        onPress={pressHandler} 
        android_ripple={{color : 'black'}}>
       
            <Text style={styles.buttonText}>{children}</Text>
       
        </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterConainer : {
        margin : 6,
        overflow: 'hidden',
        width : 150,
        height: 70
    },
    buttonContainer : {
        backgroundColor: Colors.primary500,
        paddingVertical : 1,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 6,
        borderRadius : 28,
    },
    buttonText : {
        color : 'white',
        textAlign: 'center',
        margin: 10
    }
})
