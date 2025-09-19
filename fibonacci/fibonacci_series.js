let inputForLimit = 3;
let fibonacciValue = 0;
let secondAddingValue = 1
let firstAddingValue = 0;
let noOfIteration= 1;

if(inputForLimit === 0){
   console.log("The fibonacci number for ",inputForLimit,"is",0);
}
else if(inputForLimit === 1){
    console.log("The fibonacci number for ",inputForLimit,"is",1);
}
else{
  while( noOfIteration < inputForLimit){
    fibonacciValue = firstAddingValue + secondAddingValue; 
    firstAddingValue = secondAddingValue;
    secondAddingValue = fibonacciValue;
    noOfIteration = noOfIteration + 1;
  }
  console.log("The fibonacci number for",inputForLimit,"is",fibonacciValue);
}
