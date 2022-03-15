import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function generateQuestion() {
  return getRandomNumber(100);
}

function generateCorrectAnswer(allegedlyPrimeNumber) {
  const isNumberPrime = (function isNumberPrime(number) {
    if (number < 1) {
      return false;
    }

    for (let divisor = number - 1; divisor > 1; divisor -= 1) {
      if (number % divisor === 0) {
        return false;
      }
    }

    return true;
  }(allegedlyPrimeNumber));

  return isNumberPrime ? 'yes' : 'no';
}

export default function start() {
  common.greet();

  const userName = common.askForName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  common.start(userName, generateQuestion, generateCorrectAnswer);
}
