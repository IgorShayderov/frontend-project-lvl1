export function getRandomNumber(highestNumber, lowestNumber = 1) {
  const range = highestNumber - lowestNumber + 1;
  const randomNumber = lowestNumber + Math.floor(Math.random() * range);

  return randomNumber;
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
  if (operation === '+') {
    return addNumbers(number1, number2);
  }

  if (operation === '-') {
    return substractNumbers(number1, number2);
  }

  if (operation === '*') {
    return multiplyNumbers(number1, number2);
  }

  throw new Error(`There is no ${operation} operation`);
}
