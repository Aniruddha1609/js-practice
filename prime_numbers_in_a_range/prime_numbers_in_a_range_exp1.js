const limit = 10;
let divisorOfNumber = 2;
let primeCandidate = 2;
let divisorLimit = 2;

while ( primeCandidate <= limit && divisorOfNumber <= divisorLimit ){
    if(primeCandidate === 2){
        console.log(primeCandidate);
        primeCandidate++;
        divisorOfNumber ++;
        divisorLimit=primeCandidate-1;
    } 
}       
