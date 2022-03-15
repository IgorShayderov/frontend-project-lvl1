import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function generateQuestion() {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);

  return `${firstNum} ${secondNum}`;
}

function generateCorrectAnswer(numbersText) {
  const [firstNum, secondNum] = numbersText.match(/\d+/g);
  const minimalNumber = Math.min(firstNum, secondNum);
  // eslint-disable-next-line eqeqeq
  const greaterNumber = parseInt(minimalNumber == firstNum ? secondNum : firstNum, 10);
  let potentialDivisor = minimalNumber;

  while (greaterNumber % potentialDivisor > 0 || minimalNumber % potentialDivisor > 0) {
    potentialDivisor -= 1;
  }

  return `${potentialDivisor}`;
}

export default function start() {
  common.greet();

  const userName = common.askForName();

  console.log('Find the greatest common divisor of given numbers.');

  common.start(userName, generateQuestion, generateCorrectAnswer);
}
