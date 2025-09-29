function findSuccessorVowel(string, firstVowel) {

  for (let secondVowel = firstVowel + 1; secondVowel < string.length; secondVowel++) {

    const charIsA = string[secondVowel] === "a";
    const charisE = string[secondVowel] === "e";
    const charIsI = string[secondVowel] === "i";
    const charIsO = string[secondVowel] === "o";
    const charIsU = string[secondVowel] === "u";

    if (charIsA || charisE || charIsI || charIsO || charIsU) {
      return secondVowel;
    }
  }
}

function claculateDistance(firstVowel, secondVowel, minimumDistance) {
  let distance = 0;
  distance = firstVowel > secondVowel ? firstVowel - secondVowel : secondVowel - firstVowel;

  if (distance < minimumDistance) {
    minimumDistance = distance;
  }
  return minimumDistance;
}

function findPredecessorVowel(string) {
  let minimumDistance = 1001;
  let nextVowel = 0;

  for (let firstVowel = 0; firstVowel < string.length; firstVowel++) {

    const charIsA = string[firstVowel] === "a";
    const charIsE = string[firstVowel] === "e";
    const charIsI = string[firstVowel] === "i";
    const charIsO = string[firstVowel] === "o";
    const charIsU = string[firstVowel];

    if (charIsA || charIsE || charIsI || charIsO || charIsU === "u") {
      nextVowel = findSuccessorVowel(string, firstVowel);
      minimumDistance = claculateDistance(firstVowel, nextVowel, minimumDistance);
    }
  }

  if (minimumDistance === 1001) {
    minimumDistance = -1;
  }
  return minimumDistance;
}

function putBrackets(string) {
  return "[ Input : " + string + " ]  |";
}

function composeMessage(string, expectedValue) {
  const inputFragment = putBrackets(string);
  const expectFragment = " expected is -> " + expectedValue + " | ";
  const actual = findPredecessorVowel(string);
  const mark = actual === expectedValue ? '✅' : '❌';
  console.log(mark + inputFragment + expectFragment + " your value : " + actual);
}

function testAll() {
  composeMessage("", -1);
  composeMessage("a", -1);
  composeMessage("ae", 1);
  composeMessage("abe", 2);
  composeMessage("ab ce", 4);
  composeMessage("abcdefgi", 3);
  composeMessage("beautiful", 1);
  composeMessage("strength", -1);
  composeMessage("elephant", 2);
  composeMessage("abyrhdgenskkhrhgisbkbko", 6);
  composeMessage("chatgpt", -1);
  composeMessage("thoughworks", 1);
  composeMessage("   ", -1)
}

testAll();
