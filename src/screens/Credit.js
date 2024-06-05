// This is 2 button navigation type, replace=>叠加  和  popToTop=>唯一
//<Button title="replace" onPress={()=>navigation.replace("Home")} />
//<Button title="poptop" onPress={()=>navigation.popToTop("Home")} />

import { Text,View,StyleSheet,Button,  } from 'react-native'
import { COLORS } from '../constants/color';
import { Message } from '../components/Message'
import { Title } from '../components/Title'

export const Credit = ({navigation}) =>{ 
    return (
        <View style={styles.container}>
            <Title text="Credit"/>
                <Message text={`In the realm of X's and O's, upon the gridthey go,Where two contenders face off, in
tic-tac-toe.
A pencil mark, a battle stark, lines crosslike ancient runes,Each player seeks, with tactic sleek, toalign their threes and twos.
First goes X, with hopes to vex, in the
corner she resides,
Then O's response, a parry, a taunt, besidethe X she slides.
The square becomes a battleground,where silent warriors clash,
With every mark, they leave their spark, inthis timeless match.
A diagonal attempt, an intercept, the X'smake their claim,
But O is shrewd, not easily subdued, andblocks the path to fame.
Then O's response, a parry, a taunt, besidethe X she slides.
The square becomes a battleground,where silent warriors clash,
With every mark, they leave their spark, inthis timeless match.
A diagonal attempt, an intercept, the X'smake their claim,
But O is shrewd, not easily subdued, andblocks the path to fame.
They dance in turns, the board it churnswith symbols old as time,`} />
            <Button title="back" onPress={()=>navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
})