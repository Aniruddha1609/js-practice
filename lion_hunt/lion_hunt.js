const  animalField = `"L     Z"`  
let foundLions = false;
let foundZebras = false ;
let minimumDistance = 100;

for (let lionFinder = 0 ; lionFinder < animalField.length ; lionFinder++){
    if(animalField[lionFinder]=== "L"){
        foundLions = true;
    
    for (let zebraFinder = 0; zebraFinder < animalField.length; zebraFinder++) {
      if (animalField[zebraFinder] === "Z"){
        foundZebras = true;

        let distance = 0;

        distance =(lionFinder > zebraFinder) ? lionFinder - zebraFinder - 1 : zebraFinder - lionFinder - 1;
           
        minimumDistance = (distance < minimumDistance) ? distance : minimumDistance;
      }
    }
  }
}

if(foundLions === false || foundZebras === false) {
  console.log(-1);
} else {
  console.log("The minimum distance between a lion and a zebra is ",minimumDistance);
}





   






