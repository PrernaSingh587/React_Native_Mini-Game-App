import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react';

function StartGameScreen({onPress}) {
    const [enteredNumber , setEnteredNumber] = useState('');

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function pressInputHandler () {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<0 || chosenNumber > 99 ) {
            Alert.alert(
                'Invalid Number!', //title
                'Number has to be a number bw 1 and 99', //message
                [{text : 'Okay', style : 'destructive', onPress: resetInputHandler}], //button
            );
            return;
        }

        onPress(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonStyle}>
            <PrimaryButton pressHandler={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonStyle}>
            <PrimaryButton pressHandler={pressInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer : {
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height : 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

    numberInput : {
        height : 50,
        width : 50,
        fontSize : 32,
        borderBottomColor : 'yellow',
        borderBottomWidth: 2,
        color : 'yellow',
        marginVertical : 8,
        fontWeight : 'bold',
        textAlign: 'center'
    },
    buttonsContainer : {
        flexDirection: 'row'
    },
    buttonStyle : {
        flex: 1,
    }
});