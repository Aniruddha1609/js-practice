
const hangmanWordList = [
  "absence", "accidentally", "accommodate", "achieve", "acquire",
  "amateur", "apparent", "argument", "attendance", "believe",
  "calendar", "category", "cemetery", "changeable", "collectible",
  "column", "committed", "conscience", "conscious", "definitely",
  "discipline", "drunkenness", "embarrass", "environment", "existence",
  "experience", "familiar", "fascinate", "foreign", "forfeit",
  "friend", "grateful", "guarantee", "harass", "honest",
  "ignorance", "immediate", "incidentally", "independent", "interrupt",
  "irresistible", "jealous", "judgment", "knowledge", "leisure",
  "library", "license", "maintenance", "maneuver", "millennium",
  "miniature", "mischievous", "neighbor", "noticeable", "occasionally",
  "occurred", "opportunity", "optimism", "parallel", "pastime",
  "perseverance", "personnel", "possession", "preferred", "prejudice",
  "privilege", "publicly", "questionnaire", "receive", "recommend",
  "relevant", "repetition", "resistance", "rhythm", "schedule",
  "separate", "sergeant", "sincerely", "successfully", "supersede",
  "surprise", "threshold", "tomorrow", "twelfth", "tyranny",
  "unforeseen", "unnecessary", "until", "usually", "vacuum",
  "valuable", "vehicle", "visible", "weird", "whether",
  "wholly", "withhold", "writing", "yield", "zucchini"
];

function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * hangmanWordList.length);
  return hangmanWordList[randomIndex].toLowerCase();
}

function generateHiddenWord(targetWord) {
  let hiddenWord = "";
  for (let i = 0; i < targetWord.length; i++) {
    hiddenWord += "_";
  }
  return hiddenWord;
}

function revealGuessedLetterInWord(targetWord, currentHiddenWord, guessedLetter) {
  let updatedHiddenWord = "";
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord.charAt(i) === guessedLetter) {
      updatedHiddenWord += guessedLetter;
    } else {
      updatedHiddenWord += currentHiddenWord.charAt(i);
    }
  }
  return updatedHiddenWord;
}

function displayCurrentGameState(hiddenWordDisplay, guessedLetterList, remainingChances) {
  console.log("\nWord: " + hiddenWordDisplay.split("").join(" "));
  console.log("Guessed Letters: " + guessedLetterList);
  console.log("Remaining Chances: " + remainingChances);
}

function getPlayerLetterInput(guessedLetterList) {
  let userInput = prompt("Enter a letter: ");
  if (userInput === null) return null;
  userInput = userInput.toLowerCase();
  if (userInput.length !== 1 || userInput < "a" || userInput > "z") {
    console.log("Invalid input. Enter one letter from a-z.");
    return getPlayerLetterInput(guessedLetterList);
  }
  if (guessedLetterList.indexOf(userInput) !== -1) {
    console.log("You already guessed that letter.");
    return getPlayerLetterInput(guessedLetterList);
  }
  return userInput;
}

function runHangmanGame() {
  const secretWord = selectRandomWord();
  let maskedWord = generateHiddenWord(secretWord);
  let remainingLives = 6;
  let guessedLetters = "";

  console.log("🎮 Welcome to Hangman!");

  while (remainingLives > 0 && maskedWord.indexOf("_") !== -1) {
    displayCurrentGameState(maskedWord, guessedLetters, remainingLives);
    const currentGuess = getPlayerLetterInput(guessedLetters);

    if (currentGuess === null) {
      console.log("Game aborted by the player.");
      return;
    }

    guessedLetters += currentGuess;

    if (secretWord.indexOf(currentGuess) !== -1) {
      maskedWord = revealGuessedLetterInWord(secretWord, maskedWord, currentGuess);
      console.log("✅ Correct guess!");
    } else {
      remainingLives--;
      console.log("❌ Wrong guess.");
    }
  }

  if (maskedWord.indexOf("_") === -1) {
    console.log("\n🎉 You won! The word was: " + secretWord);
  } else {
    console.log("\n💀 Game over! The word was: " + secretWord);
  }
}

runHangmanGame();
