let NO_OF_TIMES = 0;

function sort(data) {
  let sortedData = data.slice();
  for (let i = 0; i < sortedData.length - 1; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      NO_OF_TIMES++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function generateRandomElement(lower, upper) {
  return lower + Math.round(Math.random() * upper - lower);
}

function benchmark(times) {
  if (times <= 0) {
    return;
  }
  const randomElements = [];
  for (let index = 0; index < times; index++) {
    randomElements.push(generateRandomElement(0, 100));
  }
  console.log(`Actual Value: ${randomElements}, | Sorted Value: ${sort(randomElements)} | Times of Iteration ${NO_OF_TIMES}\n\n`);
  NO_OF_TIMES =  0;
  benchmark(times - 1);
}

function main(args) {
   benchmark(args[0] || 5);
}

main(Deno.args);
