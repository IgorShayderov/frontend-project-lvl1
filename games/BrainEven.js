import { getRandomNumber } from '../utils/helpers.js';

import AbstractBrainGame from './AbstractBrainGame.js';

export default function BrainEven() {
}

BrainEven.prototype = new AbstractBrainGame();
Object.defineProperty(BrainEven.prototype, 'constructor', {
  enumerable: false,
  value: BrainEven,
  writable: true,
});

BrainEven.prototype.start = function start() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  this.$super.start.call(this, () => getRandomNumber(100));
};

BrainEven.prototype.checkAnswerCorrectness = function checkAnswerCorrectness(number) {
  const isNumberEven = number % 2 === 0;

  this.correctAnswer = isNumberEven ? 'yes' : 'no';

  return this.correctAnswer === this.userAnswer;
};
