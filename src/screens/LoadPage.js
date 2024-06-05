import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Data } from '../datamodel/data';
import { Game }  from '../datamodel/game';
import { LoadItem } from '../components/LoadItem';

export const LoadGame = ({ navigation }) => {
    const [savedGames, setSavedGames] = useState([]);
    const [winner, winningSequence] = []
    useEffect(() => {
      const fetchSavedGames = async () => {
        const loadedGames = await Data.loadSavedGames();
        setSavedGames(loadedGames);
      };
  
      fetchSavedGames();
    }, []);
  
    const handleLoadGame = (gameData) => {
        const loadedGame = new Game(gameData.history, gameData.currentMove);
        const [result, winningSequence] = loadedGame.checkWinner(loadedGame.getCurrentBoard());
        navigation.navigate('Home', { loadedGame, winningSequence });
      };
  
    const handleDeleteGame = async (id) => {
      await Data.deleteSavedGame(id);
      const updatedSavedGames = savedGames.filter(game => game.id !== id);
      setSavedGames(updatedSavedGames);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-AU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'Australia/Brisbane' 
        });
      };
      
      const formatTime = (timestamp) => {
        const time = new Date(timestamp);
        return time.toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true, 
          timeZone: 'Australia/Brisbane' 
        });
      };
      
    const getStepCount = (history) => {
        let stepCount = history.length-1
        return stepCount;
    };

    const getWinner = (game) => {
        const gameInstance = new Game(game.history, game.currentMove);
        const [result,_] = gameInstance.checkWinner(gameInstance.getCurrentBoard());
        return result;
      };

      return (
        <View>
          {savedGames.length > 0 ? (
            <FlatList
              data={savedGames}
              renderItem={({ item, index }) => (
                <LoadItem
                  item={item}
                  index={index}
                  handleLoadGame={handleLoadGame}
                  handleDeleteGame={handleDeleteGame}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  getStepCount={getStepCount}
                />
              )}
              keyExtractor={item => item.id ? item.id.toString() : 'undefined-id'}
            />
          ) : (
            <Text>No saved games available.</Text>
          )}
          <Button title="Back" onPress={() => navigation.goBack()} />
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
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    marginBottom: 10,
  },
  gameResult: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameDate: {
    fontSize: 16,
    color: '#555',
  },
  gameTime: {
    fontSize: 16,
    color: '#555',
  },
  gameSteps: {
    fontSize: 16,
    color: '#555',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
