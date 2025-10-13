function getEmoji(userInput) {
  let emoji;
  switch (userInput) {
    case "stone": emoji = "🪨";
      break;
    case "paper": emoji = "🗒️";
      break;
    case "scissor": emoji = "✂️";
      break;
  }
  return emoji;
}

function checkComputerInput(computerInput) {
  switch (computerInput) {
    case 0: computerInput = "stone";
      break;
    case 1: computerInput = "paper";
      break;
    case 2: computerInput = "scissor";
      break;
  }
  return computerInput;
}

function drawMessage() {
  console.log("\n\tDraw Match Try Again");
  console.log("\n\t--------------------");
  return;
}

function userInputStone(computerInput) {
  if (computerInput === "paper") {
    return false;
  }
  if (computerInput === "scissor") {
    return true;
  }
  drawMessage();
  return compareInputs();
}

function userInputPaper(computerInput) {
  if (computerInput === "scissor") {
    return false;
  }
  if (computerInput === "stone") {
    return true;
  }
  drawMessage();
  return compareInputs();
}

function userInputScissor(computerInput) {
  if (computerInput === "stone") {
    return false;
  }
  if (computerInput === "paper") {
    return true;
  }
  drawMessage();
  return compareInputs();
}

function checkInputs(userInput, computerInput) {

  if (userInput === "stone") {
    return userInputStone(computerInput);
  }

  if (userInput === "paper") {
    return userInputPaper(computerInput);
  }

  if (userInput === "scissor") {
    return userInputScissor(computerInput);
  }
}

function getUserInput() {
  const userInput = prompt("\n\tEnter input ↩️");
  const userInputEmoji = getEmoji(userInput);
  console.log("\n\tYour input is =>", userInput, userInputEmoji);
  return userInput;
}

function getComputerInput() {
  let computerInput = Math.floor(Math.random() * 3);
  computerInput = checkComputerInput(computerInput);
  const compareInputEmoji = getEmoji(computerInput);
  console.log(`\n\tComputer Input is => ${computerInput} ${compareInputEmoji}`);
  return computerInput;
}

function compareInputs() {
  const userInput = getUserInput();

  let computerInput = getComputerInput();

  if (userInput !== "stone" && userInput !== "paper" && userInput !== "scissor") {
    console.log("\n\tWrong Input Try Again");
    console.log("\n\t---------------------");
    return compareInputs();
  }
  return checkInputs(userInput, computerInput);
}

function play() {
  const result = compareInputs();
  if (result === true) {
    console.log("\n\tYou Win 🏆🥇\n");
  } else if (result === "Invalid") {
    console.log("\n\tTry Again 🪫\n");
  } else {
    console.log("\n\tYou Lose 😞\n");
  }
}
console.log(`\n\tInput can be:  stone 🪨  paper 🗒️  scissor ✂️`);

play();
