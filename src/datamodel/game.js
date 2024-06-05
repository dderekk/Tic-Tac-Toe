import AsyncStorage from '@react-native-async-storage/async-storage';
export class Game {
    constructor(history = [Array(9).fill(null)], currentMove = 0) {
      this.history = history;
      this.currentMove = currentMove;
    }
  
    getCurrentBoard() {
      return this.history[this.currentMove];
    }
  
    checkWinner(board) {
      const winStates = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
      ];
      let winLines = []
      let winner = undefined
      for (let i of winStates) {
        const [a, b, c] = i;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          winner = board[a]
          winLines.push(i)
        }
      }
      if (winLines.length > 0){
        return [`${winner} wins`,winLines];
      }
      else if (this.history.length === 10) { // If all moves have been played
        return ['It is a tie',[]];
      }
      return [this.currentMove % 2 === 0 ? 'X to play' : 'O to play',[]];
    }
  
    makeMove(index) {
      const currentBoard = this.getCurrentBoard().slice();
      if (currentBoard[index] || this.checkWinner(currentBoard)[0].includes('wins')) {
        return null; // If the move is not allowed (square already filled or game over)
      }
  
      currentBoard[index] = this.currentMove % 2 === 0 ? 'X' : 'O';
      const newHistory = this.history.slice(0, this.currentMove + 1).concat([currentBoard]);
      return new Game(newHistory, this.currentMove + 1);
    }
  
    undo() {
      if (this.currentMove === 0) {
        return null; // If it's the first move, can't undo
      }
      return new Game(this.history, this.currentMove - 1);
    }
  
    redo() {
      if (this.currentMove >= this.history.length - 1) {
        return null; // If it's the last move, can't redo
      }
      return new Game(this.history, this.currentMove + 1);
    }
  
    resetGame() {
      return new Game(); // Reset the game to its initial state
    }

    checkFinish(){
      const currentBoard = this.getCurrentBoard().slice();
      if (this.checkWinner(currentBoard)[0].includes('tie') || this.checkWinner(currentBoard)[0].includes('wins')) {
        return true;
      }
      return false;
    }

  }
  