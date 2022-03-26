import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function calcGCD(firstNum, secondNum) {
  const minimalNumber = Math.min(firstNum, secondNum);
  const greaterNumber = minimalNumber === firstNum ? secondNum : firstNum;
  let potentialDivisor = minimalNumber;

  while (greaterNumber % potentialDivisor > 0 || minimalNumber % potentialDivisor > 0) {
    potentialDivisor -= 1;
  }

  return potentialDivisor;
}

function generateQuestion() {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);

  return {
    question: `${firstNum} ${secondNum}`,
    answer: `${calcGCD(firstNum, +secondNum)}`,
  };
}

export default function start() {
  const userName = common.askForName();

  console.log('Find the greatest common divisor of given numbers.');

  common.start(userName, generateQuestion);
}
