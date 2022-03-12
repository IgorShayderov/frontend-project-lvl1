import AbstractBrainGame from './AbstractBrainGame.js';
import { getRandomNumber } from '../utils/helpers.js';

export default function BrainPrime() {
}

BrainPrime.prototype = new AbstractBrainGame();
Object.defineProperty(BrainPrime.prototype, 'constructor', {
  enumerable: false,
  value: BrainPrime,
  writable: true,
});

BrainPrime.prototype.start = function start() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  this.$super.start.call(this);
};

BrainPrime.prototype.generateQuestion = function generateQuestion() {
  const randomNumber = getRandomNumber(100);
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
  }(randomNumber));

  this.correctAnswer = isNumberPrime ? 'yes' : 'no';

  return randomNumber;
};
