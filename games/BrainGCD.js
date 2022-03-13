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

  this.$super.start.call(this);
};

BrainGCD.prototype.generateQuestion = function generateQuestion() {
  const firstNum = getRandomNumber(100);
  const secondNum = getRandomNumber(100);
  const minimalNumber = Math.min(firstNum, secondNum);
  // eslint-disable-next-line eqeqeq
  const greaterNumber = parseInt(minimalNumber == firstNum ? secondNum : firstNum, 10);
  let potentialDivisor = minimalNumber;

  while (greaterNumber % potentialDivisor > 0 || minimalNumber % potentialDivisor > 0) {
    potentialDivisor -= 1;
  }

  this.correctAnswer = `${potentialDivisor}`;

  return `${firstNum} ${secondNum}`;
};
