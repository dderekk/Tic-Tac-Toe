import AsyncStorage from '@react-native-async-storage/async-storage';

export class Data {

  static async getSavedGames() {
    try {
      const savedGamesString = await AsyncStorage.getItem('savedGames');
      const savedGames = savedGamesString != null ? JSON.parse(savedGamesString) : [];
      return savedGames;
    } catch (error) {
      console.error('Failed to load saved games:', error);
      throw error; // or return an empty array if you prefer to handle it that way: return [];
    }
  }

  // This method saves a new game into the list of saved games in AsyncStorage
  static async saveGame(currentGame) {
    try {

      const savedGames = await this.getSavedGames(); // Retrieve the current list of games
      const newSave = {
        id: Date.now(), // Unique identifier for the saved game
        history: currentGame.history,
        currentMove: currentGame.currentMove,
        timestamp: new Date().toISOString(),
      };
      savedGames.push(newSave); // Add the new save to the array
      await AsyncStorage.setItem('savedGames', JSON.stringify(savedGames)); // Save it back to AsyncStorage
    } catch (error) {
      // Handle any errors in saving to AsyncStorage
      console.error('Failed to save the game:', error);
      throw error;
    }
  }

  static async deleteSavedGame(id) {
    const savedGames = await this.getSavedGames();
    const filteredGames = savedGames.filter(game => game.id !== id);
    await AsyncStorage.setItem('savedGames', JSON.stringify(filteredGames));
  }
  
  static async loadSavedGames() {
    try {
      const savedGamesString = await AsyncStorage.getItem('savedGames');
      const loadedGames = savedGamesString ? JSON.parse(savedGamesString) : [];
      return loadedGames;
    } catch (error) {
      console.error('Failed to load saved games:', error);
      // Handle the error as needed
      return []; // Return an empty array if there was an error
    }
  }
}