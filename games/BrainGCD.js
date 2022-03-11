import AbstractBrainGame from './AbstractBrainGame.js';

import { getRandomNumber } from '../utils/helpers.js';

export default function BrainGCD() {
}

BrainGCD.prototype = new AbstractBrainGame();
Object.defineProperty(BrainGCD.prototype, 'constructor', {
  enumerable: false,
  value: BrainGCD,
  writable: true,
});

BrainGCD.prototype.start = function start() {
  console.log('Find the greatest common divisor of given numbers.');

  this.$super.start.call(this, () => `${getRandomNumber(100)} ${getRandomNumber(100)}`);
};

BrainGCD.prototype.checkAnswerCorrectness = function checkAnswerCorrectness(numbersString) {
  const numbers = numbersString.match(/\d+/g);

  if (numbers === null) {
    return false;
  }

  const [firstNum, secondNum] = numbers;
  const minimalNumber = Math.min(firstNum, secondNum);
  // eslint-disable-next-line eqeqeq
  const greaterNumber = parseInt(minimalNumber == firstNum ? secondNum : firstNum, 10);
  let potentialDivisor = minimalNumber;

  while (greaterNumber % potentialDivisor > 0 || minimalNumber % potentialDivisor > 0) {
    potentialDivisor -= 1;
  }

  this.correctAnswer = potentialDivisor;

  return this.correctAnswer === parseInt(this.userAnswer, 10);
};
