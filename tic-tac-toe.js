function playTicTacToe() {
  const BOARD_SIZE = 3;
  let gameBoard = [];
  let playerXName;
  let playerOName;

  function createEmptyBoard() {
    gameBoard = [];
    for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
      gameBoard[rowIndex] = createEmptyRow();
    }
  }

  function createEmptyRow() {
    const row = [];
    for (let columnIndex = 0; columnIndex < BOARD_SIZE; columnIndex++) {
      row.push(' ');
    }
    return row;
  }

  function displayBoard() {
    let boardString = '';
    for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
      boardString += ' ' + gameBoard[rowIndex].join(' | ') + ' \n';
      if (rowIndex < BOARD_SIZE - 1) {
        boardString += '-----------\n';
      }
    }
    return boardString;
  }

  function isCellEmpty(rowIndex, columnIndex) {
    return gameBoard[rowIndex][columnIndex] === ' ';
  }

  function isIndexInBounds(index) {
    return index >= 0 && index < BOARD_SIZE;
  }

  function parsePlayerInput(inputString) {
    if (!inputString) return null;

    const trimmedInput = inputString.trim().toUpperCase();
    const parts = trimmedInput.split(',');

    if (parts.length !== 2) return null;

    const inputRow = Math.floor(+parts[0]) - 1;
    const inputColumn = Math.floor(+parts[1]) - 1;

    if (!Number.isInteger(inputRow) || !Number.isInteger(inputColumn)) return null;
    if (!isIndexInBounds(inputRow) || !isIndexInBounds(inputColumn)) return null;
    if (!isCellEmpty(inputRow, inputColumn)) return null;

    return { row: inputRow, column: inputColumn };
  }

  function getPlayerMove(currentPlayer) {
    let move = null;
    const currentPlayerName = currentPlayer === 'X' ? playerXName : playerOName;

    while (!move) {
      const input = prompt(`${currentPlayerName} (${currentPlayer}), enter your move e.g., 1,2:`);
      if (input === null) return null;
      move = parsePlayerInput(input);
      if (!move) console.log("Invalid move. Try again.");
    }
    return move;
  }

  function placeMoveOnBoard(rowIndex, columnIndex, playerSymbol) {
    gameBoard[rowIndex][columnIndex] = playerSymbol;
  }

  function checkRowForWin(rowIndex, playerSymbol) {
    return gameBoard[rowIndex][0] === playerSymbol &&
      gameBoard[rowIndex][1] === playerSymbol &&
      gameBoard[rowIndex][2] === playerSymbol;
  }

  function checkColumnForWin(columnIndex, playerSymbol) {
    return gameBoard[0][columnIndex] === playerSymbol &&
      gameBoard[1][columnIndex] === playerSymbol &&
      gameBoard[2][columnIndex] === playerSymbol;
  }

  function checkAllRows(playerSymbol) {
    return checkRowForWin(0, playerSymbol) ||
      checkRowForWin(1, playerSymbol) ||
      checkRowForWin(2, playerSymbol);
  }

  function checkAllColumns(playerSymbol) {
    return checkColumnForWin(0, playerSymbol) ||
      checkColumnForWin(1, playerSymbol) ||
      checkColumnForWin(2, playerSymbol);
  }

  function checkDiagonalsForWin(playerSymbol) {
    const leftDiagonal = gameBoard[0][0] === playerSymbol &&
      gameBoard[1][1] === playerSymbol &&
      gameBoard[2][2] === playerSymbol;

    const rightDiagonal = gameBoard[0][2] === playerSymbol &&
      gameBoard[1][1] === playerSymbol &&
      gameBoard[2][0] === playerSymbol;

    return leftDiagonal || rightDiagonal;
  }

  function isWinningMove(playerSymbol) {
    return checkAllRows(playerSymbol) ||
      checkAllColumns(playerSymbol) ||
      checkDiagonalsForWin(playerSymbol);
  }

  function isBoardFull() {
    for (let rowIndex = 0; rowIndex < BOARD_SIZE; rowIndex++) {
      if (rowHasEmptyCell(rowIndex)) return false;
    }
    return true;
  }

  function rowHasEmptyCell(rowIndex) {
    for (let columnIndex = 0; columnIndex < BOARD_SIZE; columnIndex++) {
      if (gameBoard[rowIndex][columnIndex] === ' ') return true;
    }
    return false;
  }

  function switchPlayerSymbol(currentSymbol) {
    return currentSymbol === 'X' ? 'O' : 'X';
  }

  function playSingleGame() {
    createEmptyBoard();
    let currentPlayer = 'X';

    while (true) {
      console.clear();
      console.log(`Current board:\n\n${displayBoard()}`);
      const playerMove = getPlayerMove(currentPlayer);

      if (!playerMove) {
        console.log("Game cancelled.");
        return;
      }

      placeMoveOnBoard(playerMove.row, playerMove.column, currentPlayer);

      if (isWinningMove(currentPlayer)) {
        console.log(`\n${currentPlayer === 'X' ? playerXName : playerOName} (${currentPlayer}) wins!\nFinal board:\n\n${displayBoard()}`);
        break;
      }

      if (isBoardFull()) {
        console.log(`It's a draw!\nFinal board:\n${displayBoard()}`);
        break;
      }

      currentPlayer = switchPlayerSymbol(currentPlayer);
    }
  }

  function askToReplay() {
    return confirm("Do you want to play again?");
  }

  function startGameLoop() {
    playerXName = prompt("Enter name for Player X:")?.trim() || "Player 1";
    playerOName = prompt("Enter name for Player O:")?.trim() || "Player 2";

    while (true) {
      playSingleGame();
      const replay = askToReplay();
      if (!replay) {
        console.log("Thanks for playing Tic Tac Toe!");
        break;
      }
    }
  }

  startGameLoop();
}

playTicTacToe();
