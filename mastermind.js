function generateSecretCode() {
  const secretCodeArray = [];
  for (let index = 0; index < 4; index++) {
    secretCodeArray.push(Math.floor(Math.random() * 10));
  }
  return secretCodeArray;
}

function getUserGuess() {
  let userInputGuess = prompt("Enter a 4-digit guess (digits 0-9):");
  while (userInputGuess.length !== 4 || !isValidGuess(userInputGuess)) {
    userInputGuess = prompt("Invalid guess. Please enter a valid 4-digit guess (digits 0-9):");
  }
  return userInputGuess.split("").map(Number);
}

function isValidGuess(userInputGuess) {
  for (let digitIndex = 0; digitIndex < 4; digitIndex++) {
    if (userInputGuess[digitIndex] < '0' || userInputGuess[digitIndex] > '9') {
      return false;
    }
  }
  return true;
}

function countExactMatches(guessArray, secretCodeArray) {
  let exactMatchCount = 0;
  for (let positionIndex = 0; positionIndex < 4; positionIndex++) {
    if (guessArray[positionIndex] === secretCodeArray[positionIndex]) {
      exactMatchCount++;
    }
  }
  return exactMatchCount;
}

function countPartialMatches(guessArray, secretCodeArray) {
  let partialMatchCount = 0;
  const secretCodeArrayCopy = secretCodeArray.slice();
  const guessArrayCopy = guessArray.slice();

  for (let positionIndex = 0; positionIndex < 4; positionIndex++) {
    if (guessArrayCopy[positionIndex] === secretCodeArrayCopy[positionIndex]) {
      guessArrayCopy[positionIndex] = -1;
      secretCodeArrayCopy[positionIndex] = -2;
    }
  }

  partialMatchCount = findPartialMatches(guessArrayCopy, secretCodeArrayCopy);
  return partialMatchCount;
}

function findPartialMatches(guessArrayCopy, secretCodeArrayCopy) {
  let partialMatchCount = 0;

  for (let guessIndex = 0; guessIndex < 4; guessIndex++) {
    for (let codeIndex = 0; codeIndex < 4; codeIndex++) {
      if (isPartialMatch(guessArrayCopy, secretCodeArrayCopy, guessIndex, codeIndex)) {
        partialMatchCount++;
        secretCodeArrayCopy[codeIndex] = -2;
        break;
      }
    }
  }

  return partialMatchCount;
}

function isPartialMatch(guessArrayCopy, secretCodeArrayCopy, guessIndex, codeIndex) {
  return guessArrayCopy[guessIndex] === secretCodeArrayCopy[codeIndex];
}

function startGame() {
  const secretCodeArray = generateSecretCode();
  let remainingAttempts = 10;
  let isGameWon = false;

  while (remainingAttempts > 0 && !isGameWon) {
    const userGuessArray = getUserGuess();
    const exactMatchCount = countExactMatches(userGuessArray, secretCodeArray);
    const partialMatchCount = countPartialMatches(userGuessArray, secretCodeArray);

    console.log("Your Guess: " + userGuessArray.join(""));
    console.log("Exact Matches: " + exactMatchCount);
    console.log("Partial Matches: " + partialMatchCount);
    console.log("Remaining Attempts: " + (remainingAttempts - 1) + "\n\n");

    if (exactMatchCount === 4) {
      console.log("Congratulations! You've correctly guessed the secret code.");
      isGameWon = true;
    }

    remainingAttempts--;
  }

  if (!isGameWon) {
    console.log("Game Over. The secret code was: " + secretCodeArray.join(""));
  }
}

startGame();
