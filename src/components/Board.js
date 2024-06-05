import { View, Text, StyleSheet } from 'react-native'
import { Chess } from './Chess.js'
import { COLORS } from '../constants/color.js'
import { Game } from '../datamodel/game.js'


export const Board = ({ steps, onStepUpdate, winningSequence }) => {
  // Flatten the winningSequence into a single array of indices
  const winningIndices = winningSequence.flat();

  return (
    <View style={styles.board}> 
      {steps.map((step, i) => (
        <Chess 
          key={i} 
          val={step} 
          onPress={() => onStepUpdate(i)} 
          // Check if this index is in the array of winning indices
          highlight={winningIndices.includes(i)} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    board: {
      width: 300,
      height: 300,
      borderWidth: 2, // Corrected from boarderWidth
      borderColor: COLORS.DARK,
      backgroundColor: "#98B4D4",
      borderRadius: 20,
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      alignContent: "center",
    },
  });