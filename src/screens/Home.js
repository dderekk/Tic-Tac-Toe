import React, { useState,useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, Alert} from 'react-native';
import { Board } from '../components/Board';
import { COLORS } from '../constants/color';
import { Title } from '../components/Title';
import { useNavigation } from "@react-navigation/native";
import { ButtonPrototype } from '../components/ButtonPrototype';
import { Game } from '../datamodel/game';
import { Data } from '../datamodel/data';
import { LoadGame } from './LoadPage';

export const Home = ({route}) => {
  // initiallize
  const [game, setGame] = useState(new Game());
  const [winningSeq, setwinningSeq] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.loadedGame) {
      setGame(route.params.loadedGame);
      setwinningSeq(route.params.winningSequence);
    }
  }, [route.params?.loadedGame, route.params?.winningSequence]);

  const onStepUpdate = (index) => {
    const newGame = game.makeMove(index);
    if (newGame) {
      const [result, winSeq] = newGame.checkWinner(newGame.getCurrentBoard());
      setwinningSeq(winSeq);
      setGame(newGame);
    }
  };

  const undo = () => {
    const newGame = game.undo();
    if (newGame) {
      const [result, winSeq] = newGame.checkWinner(newGame.getCurrentBoard());
      setwinningSeq(winSeq); 
      setGame(newGame);
    };
  };

  const redo = () => {
    const newGame = game.redo();
    if (newGame) {
      const [result, winSeq] = newGame.checkWinner(newGame.getCurrentBoard());
      setwinningSeq(winSeq); 
      setGame(newGame);
    }
  };

  const resetGame = () => {
    setwinningSeq([]); // Reset winning sequence
    setGame(new Game()); // reset
  };

  // Handlers for navigation
  const gotoDetailHandler = () => navigation.navigate("Rules");
  const gotoCreditHandler = () => navigation.navigate("Credit");


  // Update your loadHandler to navigate and pass the callback
  
  const saveHandler = async () => {
    Alert.alert(
      'Save Game',
      'Are you sure you want to save the game?',
      [
        { text: 'Cancel' },
        {
          text: 'Save and Start New',
          onPress: async () => {
            await Data.saveGame(game);
            resetGame();
          }
        },
      ],
    );
  };
  const loadHandler = () => navigation.navigate("Load");

  const[winTittle,winSeq] = game.checkWinner(game.getCurrentBoard())
  return (
    <View style={styles.container}>
      <Title text="Tic Tac Toe "/>
      <View style={styles.buttonThree}>
        <ButtonPrototype
          icon='arrow-undo-sharp'
          Bsize={20}
          fn={undo}
          style={{ opacity: game.currentMove === 0 ? 0.3 : 1 }}
          disabled={game.currentMove === 0}
        />
        <ButtonPrototype
          label='New Game'
          fn={resetGame}
          style={{ opacity: game.currentMove === 0 ? 0.3 : 1 }}
          disabled={game.currentMove === 0}
        />
        <ButtonPrototype
          icon='arrow-redo-sharp'
          Bsize={20}
          fn={redo}
          style={{ opacity: game.currentMove >= game.history.length - 1 ? 0.3 : 1 }}
          disabled={game.currentMove >= game.history.length - 1}
        />
      </View>
      <Title text={winTittle} backgroundColor={"#CCCCFF"} height={50} width={180} fontSize={25}/>
      <Board 
        steps={game.getCurrentBoard()} 
        onStepUpdate={onStepUpdate} 
        winningSequence={winningSeq} 
      />
      <View style={styles.buttonTwo}>
        <View style={styles.buttons}>
          <Button title='Rule' onPress={gotoDetailHandler} />
        </View>
        <View style={styles.buttons}>
          <Button title='Credit' onPress={gotoCreditHandler} />
        </View>
      </View>

      <View style={styles.buttonFour}>
        <View style={styles.buttons}>
          <Button title='Save' 
          onPress={saveHandler} 
          disabled={!game.checkFinish()}/>
        </View>
        <View style={styles.buttons}>
          <Button title='Load' onPress={loadHandler} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.BACKG,
    alignItems: "center",
  },
  buttonTwo: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: Platform.OS === 'web' ? 'center' : 'space-evenly', 
    width: Platform.OS === 'web' ? '50%' : '100%', 
  },
  buttonFour:{
    marginTop: 5,
    flexDirection: "row",
    justifyContent: Platform.OS === 'web' ? 'center' : 'space-evenly', 
    width: Platform.OS === 'web' ? '50%' : '100%', 
  },
  buttons: {
    margin: 10,
    width: Platform.OS === 'web' ? '15%' : '30%', 
  },
  buttonThree:{
    width: 280,
    margin: 10,
    flexDirection: "row",
    justifyContent:'space-between',
  }
});
