export function getRandomNumber(highestNumber, lowestNumber = 1) {
  const range = highestNumber - lowestNumber + 1;
  const randomNumber = lowestNumber + Math.floor(Math.random() * range);

  return randomNumber;
}

export function calcOperationResult(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;
  }

  if (operation === '-') {
    return number1 - number2;
  }

  if (operation === '*') {
    return number1 * number2;
  }

  throw new Error(`There is no ${operation} operation`);
}
