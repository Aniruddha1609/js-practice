const add = function(num1, num2){
  return num1 + num2;
}

const calculate = function (operation, o1, o2) {
  return operation(o1,o2);
}

console.log(calculate(add,2, 3));
