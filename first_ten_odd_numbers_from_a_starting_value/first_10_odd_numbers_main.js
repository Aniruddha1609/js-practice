let currentValue = 0;
let isOdd = (currentValue % 2 !== 0);

let limit = 10;
let OddNumber = 0;

OddNumber = (isOdd === true) ? currentValue : currentValue + 1;
console.log("The first 10 odd number from",currentValue,"is");

for(let countingIteration = 0 ; countingIteration < limit ; countingIteration++){
  console.log(OddNumber);
  OddNumber = OddNumber + 2;

}


