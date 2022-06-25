
import { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

function generateRandomBetween(min,max, exclude) {
    const randomNum = Math.floor(Math.random() * (max-min)) + min;

    if(randomNum === exclude) {
        return generateRandomBetween(min,max,exclude);
    } else {
        return randomNum;
    }
}

function GameScreen({exclude, gameOver}) {
    const [guess, setGuess] = useState(0);

    let minBoundary = 1, maxBoundary = 100;

    function nextGuessHandler(direction) {

        if((direction === 'lower' && currentGuess < exclude) || (direction === 'higher' && currentGuess > exclude)) {
            Alert.alert("Dont Lie!", "You know this is wrong", [{text : "Sorry", style :"cancel", }]);
            return;
        }

        setGuess(prev => prev+1);

        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
           
        } else {
            minBoundary = currentGuess +1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        

    }

    const initialGuess = generateRandomBetween(minBoundary,maxBoundary,exclude);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === exclude) {
            gameOver(true,guess);
        }
    },[currentGuess])

    return <View style={styles.screen}>
       <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>
                Higher or Lower?
            </Text>
            <View>
           <PrimaryButton pressHandler={() => nextGuessHandler('lower')}>-</PrimaryButton>
           <PrimaryButton pressHandler={() => nextGuessHandler('higher')}>+</PrimaryButton>
           <Text>No. of Guesses : {guess}</Text>
           </View>
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 50
    },
    
})