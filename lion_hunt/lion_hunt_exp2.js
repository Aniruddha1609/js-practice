const animalField = "L     Z";

for (let lionFinder = 0; lionFinder < animalField.length; lionFinder++) {
  if (animalField[lionFinder] === "L") {
    console.log(lionFinder);
    
  }
  for (let zebraFinder = 0; zebraFinder < animalField.length; zebraFinder++) {
    if (animalField[zebraFinder] === "Z") {
        console.log(zebraFinder);
    }
  }  
}  
