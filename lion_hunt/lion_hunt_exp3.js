const animalField = "L     Z";
let minimumDistance = 100;


for (let lionFinder = 0; lionFinder < animalField.length; lionFinder++) {
  if (animalField[lionFinder] === "L") {
    console.log(lionFinder);
    
  
  for (let zebraFinder = 0; zebraFinder < animalField.length; zebraFinder++) {
    if (animalField[zebraFinder] === "Z") {
        let distance = 0;

        
        if (lionFinder > zebraFinder) {
          distance = lionFinder - zebraFinder - 1;
        } else {
          distance = zebraFinder - lionFinder - 1;
        }

        if (distance < minimumDistance) {
          minimumDistance = distance;
        }
      }
    }
  }
}  
console.log(minimumDistance);
