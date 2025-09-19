const limit = 10;
let divisorOfNumber = 2;
let primeCandidate = 2;
let divisorLimit = 2;

if(limit < 2){
    console.log("Please enter a number bigger than 1");
}

console.log("The prime in the given limit of",limit,"are :",);
while ( primeCandidate <= limit && divisorOfNumber <= divisorLimit ){
    
    if(primeCandidate === 2){
        console.log(primeCandidate);
        primeCandidate++;
        divisorOfNumber = 2;
        divisorLimit=primeCandidate-1;
    }    

    else if(primeCandidate % divisorOfNumber === 0){
        primeCandidate++;
        divisorLimit=primeCandidate-1;
        divisorOfNumber = 2;
    }

    else{
        divisorOfNumber++;

    }

    if(divisorOfNumber > divisorLimit){
        console.log(primeCandidate);
        divisorOfNumber=2;
        primeCandidate ++;
        divisorLimit = primeCandidate-1;
    }
   
}   

