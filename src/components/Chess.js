import { Text, View, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../constants/color';

export const Chess = ({ val, onPress, highlight }) => {
  return (
    <Pressable 
      style={[styles.box]} //highlight && { backgroundColor: 'gold' } 
      onPress={onPress}
    >
      <Text style={[styles.chess, highlight && styles.winChess]}>{val}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
    box: {
      width: 80,
      height: 80, // Corrected from weight to height
      borderWidth: 1,
      borderColor: COLORS.DARK,
      backgroundColor: COLORS.ChessBox,
      alignItems: "center",
      justifyContent: "center",
    },
    chess: {
      fontSize: 55,
      color: COLORS.CHESS,
      fontWeight: "bold",
    },
    winChess: {
      fontSize: 55,
      color: COLORS.WinCHESS, // Make sure to use six characters for color hex code
      fontWeight: "bold",
    },
  });