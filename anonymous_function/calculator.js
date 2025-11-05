const add = function(operand1, operand2) {
  return operand1 + operand2;
}

const sub = function(operand1, operand2) {
  return operand1 - operand2;
}

const multiply = function(operand1, operand2) {
  return operand1 * operand2;
}

const divide = function(operand1, operand2) {
  return operand1 / operand2;
}

const operationType = function(symbol) {
  switch(symbol) {
    case "+" : return add;
    case "-" : return sub;
    case "*" : return multiply;
    case "/" : return divide;
  }
}

const calculating = function(symbol, num1, num2) {
  const opeartion = operationType(symbol);
  return opeartion(num1, num2);
}

console.log(calculating(Deno.args[0], parseInt(Deno.args[1]) , parseInt(Deno.args[2])));
