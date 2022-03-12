import AbstractBrainGame from './AbstractBrainGame.js';
import { getRandomNumber } from '../utils/helpers.js';

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

  this.$super.start.call(this);
};

BrainEven.prototype.generateQuestion = function generateQuestion() {
  const randomNumber = getRandomNumber(100);
  const isNumberEven = randomNumber % 2 === 0;

  this.correctAnswer = isNumberEven ? 'yes' : 'no';

  return randomNumber;
};
