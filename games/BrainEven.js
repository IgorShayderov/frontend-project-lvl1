import { getRandomNumber } from '../utils/helpers.js';

import AbstractBrainGame from './AbstractBrainGame.js';

export default function BrainEven() {
  this.randomNum = 0;
}

BrainEven.prototype = new AbstractBrainGame();
Object.defineProperty(BrainEven.prototype, 'constructor', {
  enumerable: false,
  value: BrainEven,
  writable: true,
});

BrainEven.prototype.isNumberEven = function isNumberEven() {
  return this.randomNum % 2 === 0;
};

BrainEven.prototype.start = function start() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const loopCallback = () => {
    this.randomNum = getRandomNumber(100);

    console.log(`Question: ${this.randomNum}`);

    this.userAnswer = this.askQuestion('Answer: ');

    const isAnswerCorrect = this.checkAnswerCorrectness(this.userAnswer);

    if (isAnswerCorrect) {
      console.log('Correct!');
      this.correctAnswersCount += 1;
    } else {
      this.correctAnswer = this.isNumberEven() ? 'yes' : 'no';

      throw new Error('Lost game.');
    }
  };

  this.$super.start.call(this, loopCallback);
};

BrainEven.prototype.checkAnswerCorrectness = function checkAnswerCorrectness(userAnswer) {
  const isNumberEven = this.isNumberEven();
  const isPositiveCorrectAnswer = isNumberEven && userAnswer === 'yes';
  const isNegativeCorrectAnswer = !isNumberEven && userAnswer === 'no';

  return isPositiveCorrectAnswer || isNegativeCorrectAnswer;
};
