export function getRandomNumber(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}

function addNumbers(number1, number2) {
  return number1 + number2;
}

function substractNumbers(number1, number2) {
  return number1 - number2;
}

function multiplyNumbers(number1, number2) {
  return number1 * number2;
}

export function calcOperationResult(number1, number2, operation) {
  if (operation === '-') {
    return substractNumbers(number1, number2);
  }

  if (operation === '*') {
    return multiplyNumbers(number1, number2);
  }

  return addNumbers(number1, number2);
}
