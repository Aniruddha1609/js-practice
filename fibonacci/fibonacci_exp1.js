let inputForLimit = 1 ;
let fibonacciValue = 0;
let secondAddingValue = 1
let firstAddingValue = 0;

if(inputForLimit === 0){
   console.log("The fibonacci number for ",inputForLimit,"is",0);
}

else if(inputForLimit === 1){
    console.log("The fibonacci number for ",inputForLimit,"is",1);
}

else{
  fibonacciValue = secondAddingValue + firstAddingValue; 
  firstAddingValue = secondAddingValue;
  secondAddingValue = fibonacciValue;

  fibonacciValue = secondAddingValue + firstAddingValue;
  firstAddingValue = secondAddingValue;
  secondAddingValue = fibonacciValue ;

  fibonacciValue = secondAddingValue + firstAddingValue;
  firstAddingValue = secondAddingValue;
  secondAddingValue = fibonacciValue ;

  fibonacciValue = secondAddingValue + firstAddingValue;
  firstAddingValue = secondAddingValue;
  secondAddingValue = fibonacciValue ;
  
  console.log("The fibonacci number for ",inputForLimit,"is",fibonacciValue);
}


