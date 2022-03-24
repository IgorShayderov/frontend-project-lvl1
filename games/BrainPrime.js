import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function isNumberPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let divisor = number - 1; divisor > 1; divisor -= 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function generateQuestion() {
  const randomNumber = getRandomNumber(100);

  return {
    question: randomNumber,
    answer: isNumberPrime(randomNumber) ? 'yes' : 'no',
  };
}

export default function start() {
  const userName = common.askForName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  common.start(userName, generateQuestion);
}
