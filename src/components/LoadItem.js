import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Game } from '../datamodel/game';
import { COLORS } from '../constants/color';

export const LoadItem = ({ item, index, handleLoadGame, handleDeleteGame, formatDate, formatTime, getStepCount }) => {
  const getWinner = (game) => {
    const gameInstance = new Game(game.history, game.currentMove);
    const [result, _] = gameInstance.checkWinner(gameInstance.getCurrentBoard());
    return result;
  };

  return (
    <View style={styles.gameItem}>
      <Text style={styles.gameResult}>Game ID: {index + 1}</Text>
      <Text style={styles.gameResult}>Result: {getWinner(item)}</Text>
      <Text style={styles.gameDate}>Date: {formatDate(item.timestamp)}</Text>
      <Text style={styles.gameTime}>Time: {formatTime(item.timestamp)}</Text>
      <Text style={styles.gameSteps}>Step: {getStepCount(item.history)}</Text>
      <View style={styles.buttonGroup}>
        <Button title="Load" onPress={() => handleLoadGame(item)} color={COLORS.LOADB} />
        <Button title="Delete" onPress={() => handleDeleteGame(item.id)} color={COLORS.DELETEB} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    gameItem: {
      backgroundColor: COLORS.BACKG,
      padding: 15,
      borderBottomWidth: 2,
      borderBottomColor: COLORS.LBLUE,
      marginBottom: 10,
    },
    gameResult: {
      fontSize: 18,
      fontWeight:'bold',
    },
    gameDate: {
      fontSize: 16,
    },
    gameTime: {
      fontSize: 16,
    },
    gameSteps: {
      fontSize: 16,
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
  });