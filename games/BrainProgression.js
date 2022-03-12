import AbstractBrainGame from './AbstractBrainGame.js';
import { getRandomNumber } from '../utils/helpers.js';

const availableMathOperations = ['+', '-'];

export default function BrainProgression() {
}

BrainProgression.prototype = new AbstractBrainGame();
Object.defineProperty(BrainProgression.prototype, 'constructor', {
  enumerable: false,
  value: BrainProgression,
  writable: true,
});

BrainProgression.prototype.start = function start() {
  console.log('What number is missing in the progression?');

  this.$super.start.call(this);
};

BrainProgression.prototype.generateQuestion = function generateQuestion() {
  const minimalNumbersCount = 5;
  const numbersCount = getRandomNumber(5) + minimalNumbersCount;
  const numberToHideIndex = getRandomNumber(numbersCount) - 1;
  const arithmeticOperation = availableMathOperations[getRandomNumber(2) - 1];
  const consequentDifference = getRandomNumber(10);
  const progressionNumbers = [getRandomNumber(100)];

  for (let i = 1; i < numbersCount; i += 1) {
    const lastNumber = progressionNumbers[progressionNumbers.length - 1];
    // eslint-disable-next-line no-eval
    const nextNumber = eval(`${lastNumber} ${arithmeticOperation} ${consequentDifference}`);

    progressionNumbers.push(nextNumber);
  }

  this.correctAnswer = `${progressionNumbers[numberToHideIndex]}`;
  progressionNumbers.splice(numberToHideIndex, 1, '..');

  return progressionNumbers.join(' ');
};
