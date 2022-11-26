import start from '../core.js';
import { getRandomNumber } from '../helpers.js';

const calcGCD = (firstNum, secondNum) => {
  const minimalNumber = Math.min(firstNum, secondNum);
  const greaterNumber = minimalNumber === firstNum ? secondNum : firstNum;
  let gcd = minimalNumber;

  while (greaterNumber % gcd > 0 || minimalNumber % gcd > 0) {
    gcd -= 1;
  }

  return gcd;
};

function generateQuestionAnswerPair() {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);

  return {
    question: `${firstNum} ${secondNum}`,
    answer: `${calcGCD(firstNum, secondNum)}`,
  };
}

export default () => {
  const greetMessage = 'Find the greatest common divisor of given numbers.';

  start(greetMessage, generateQuestionAnswerPair);
};
