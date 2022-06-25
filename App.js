import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GameOverScreen from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
const [userNumber , setUserNumber] = useState();
const [gameOver, setGameOver] = useState(false);
const [screen , setScreen] = useState(<StartGameScreen onPress={pickedNumberHandler}/>)
const [noOfGuess, setNoOfGuess] = useState(0);

function pickedNumberHandler(pickedNumber) {
  setUserNumber(pickedNumber);
}

function restart() {
  setScreen(<StartGameScreen onPress={pickedNumberHandler}/>);
  setGameOver(false);
  setUserNumber();
  setNoOfGuess(0);
}

function guessNum(val) {
  setNoOfGuess(val);
}

function gameOverNow(val,guess) {
  console.log({val,guess})
  setNoOfGuess(guess);
  setGameOver(val);
  
}
console.log("hi")
useEffect(() => {
  if(userNumber) {
    console.log({userNumber})
    setScreen (<GameScreen exclude={userNumber} gameOver={gameOverNow}/>)
  }
  
  if(gameOver && !isNaN(noOfGuess) && noOfGuess>0) {
    console.log({gameOver, noOfGuess})
   setScreen(<GameOverScreen start={restart} guess={noOfGuess}/>)
  }

 
},[userNumber,gameOver,noOfGuess])



  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/dice.png')} 
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
    {screen}
    </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage : {
    opacity : 0.25
  }
});
