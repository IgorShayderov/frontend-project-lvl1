import * as core from '../engine/core.js';
import { getRandomNumber } from '../utils/helpers.js';

function calcGCD(firstNum, secondNum) {
  const minimalNumber = Math.min(firstNum, secondNum);
  const greaterNumber = minimalNumber === firstNum ? secondNum : firstNum;
  let GCD = minimalNumber;

  while (greaterNumber % GCD > 0 || minimalNumber % GCD > 0) {
    GCD -= 1;
  }

  return GCD;
}

function generateQuestionAnswerPair() {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);

  return {
    question: `${firstNum} ${secondNum}`,
    answer: `${calcGCD(firstNum, secondNum)}`,
  };
}

export default function start() {
  const greetMessage = 'Find the greatest core divisor of given numbers.';

  core.start(greetMessage, generateQuestionAnswerPair);
}
