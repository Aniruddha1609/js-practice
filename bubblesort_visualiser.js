const FAST_VALUE = 1000000 * 100;
const MEDIUM_VALUE = 1000000 * 500;
const SLOW_VALUE = 1000000 * 100000;

function generateBlock(index, mainIndex, secondoryIndex) {
  if (index === mainIndex) {
    return "🟥"
  }
  if (index === secondoryIndex) {
    return "🟩"
  }
  return index < mainIndex ? "🟦" : "⬜️" ;
}

function display(sortedData, mainIndex = -1, secondoryIndex = -1) {
  for (let index = 0; index < sortedData.length; index++) {
    const block = generateBlock(index, mainIndex, secondoryIndex);
    const paddedPart = sortedData[index].toString().padStart(2);
    const blockBunch = `${paddedPart} ${block.repeat(sortedData[index]/ 10 + 1)}`;
    console.log(blockBunch);
    
  }
}

function delayOf(delayMeasure) {
  switch (delayMeasure) {
    case "fast":
      return FAST_VALUE;
    case "medium":
      return MEDIUM_VALUE;
    case "slow":
      return SLOW_VALUE;  
  }
}
function delay(delayMeasure) {
  const speed = delayOf(delayMeasure);
  for (let index = 0; index < speed; index++) {}
}

function sort(randomElements, delayMeasure) {
  let sortedData = randomElements.slice();
  display(sortedData);
  for (let outerIndex = 0; outerIndex < sortedData.length - 1; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < sortedData.length; innerIndex++) {
      if (sortedData[outerIndex] > sortedData[innerIndex]) {
        const temp = sortedData[outerIndex];
        sortedData[outerIndex] = sortedData[innerIndex];
        sortedData[innerIndex] = temp;
      }
      delay(delayMeasure);
      console.clear();
      display(sortedData, outerIndex, innerIndex);
    }
  } 
  console.clear();
  display(sortedData, sortedData.length);
}

function createRandomElements(numberOfElements, lower, upper) {
  let randomElements = [];
  console.log(upper, lower);
  
  for (let index = 0; index <  numberOfElements; index++) {
    randomElements.push(lower + Math.round(Math.random() * upper - lower));
  }
  return randomElements;
}

function main(args)
 {
  const numberOfElements = parseInt(args[0]) || 10;
  const randomElements = createRandomElements(numberOfElements, +args[1] || 0, +args[2] || 100);
  sort(randomElements, args[4] || "medium");
 }
main(Deno.args);
