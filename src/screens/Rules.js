// This is 2 button navigation type, replace=>叠加  和  popToTop=>唯一
//<Button title="replace" onPress={()=>navigation.replace("Home")} />
//<Button title="poptop" onPress={()=>navigation.popToTop("Home")} />

import { Text,View,StyleSheet,Button } from 'react-native'
import { COLORS } from '../constants/color';
import { Message } from '../components/Message'
import { Title } from '../components/Title'

export const Rules = ({navigation}) =>{ 
    return (
        <View style={styles.container}>
            <Title text="Rules"/>
            <Message text={`Tic-Tac-Toe Detailed Rules
                Tic-Tac-Toe is a classic, two-player game played on a 3x3 grid. One player uses the 'X' symbol, while the other uses 'O'. The game proceeds as follows:\n1. The game board consists of a 3x3 grid of squares.\n2. Players decide who goes first. The first player will use 'X' and the second player will use 'O'.\n3. Players take turns placing their symbol in an empty square on the grid. The objective is to be the first to form a straight line of three of one's own symbols vertically, horizontally, or diagonally.\n4. A player wins by placing three of their symbols in a horizontal, vertical, or diagonal row.\n5. If all squares are filled and no player has formed a line of three symbols, the game is considered a draw.
            may the best player win!`} />
            <Button title="back" onPress={()=>navigation.goBack()} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})