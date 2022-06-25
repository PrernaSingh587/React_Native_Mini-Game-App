
import { Text , StyleSheet, View} from 'react-native' 
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen ({start, guess}) {
    
    return (
        <View style={styles.gameo}>
        <Text style={styles.text}>Game is over</Text>
        <PrimaryButton pressHandler= {start}>Resart</PrimaryButton>
        <Text>You have guessed in : {guess}</Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    gameo : {
        flex : 1,
        marginVertical: 300,
        borderWidth : 20,
        borderColor : 'blue',
        alignItems : 'center',
        backgroundColor : 'black'
    },
    text : {
        color : 'blue',
        fontSize : 40,
        padding : 50
    }
})