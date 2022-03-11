import AbstractBrainGame from './AbstractBrainGame.js';

import { getRandomNumber } from '../utils/helpers.js';

const availableMathOperations = ['+', '-', '*'];

export default function BrainCalc() {
}

BrainCalc.prototype = new AbstractBrainGame();
Object.defineProperty(BrainCalc.prototype, 'constructor', {
  enumerable: false,
  value: BrainCalc,
  writable: true,
});

BrainCalc.prototype.start = function start() {
  console.log('What is the result of the expression?');

  const loopCallback = () => {
    const mathExpression = this.generateMathExpression();

    console.log(`Question: ${mathExpression}`);

    this.userAnswer = this.askQuestion('Answer: ');

    const isAnswerCorrect = this.checkAnswerCorrectness(mathExpression);

    if (isAnswerCorrect) {
      console.log('Correct!');
      this.correctAnswersCount += 1;
    } else {
      throw new Error('Lost game.');
    }
  };

  this.$super.start.call(this, loopCallback);
};

BrainCalc.prototype.generateMathExpression = function generateMathExpression() {
  const maxNumber = 100;
  const [firstRandomNum, secondRandomNum] = [maxNumber, maxNumber]
    .map((num) => getRandomNumber(num));
  const randomOperationIndex = getRandomNumber(availableMathOperations.length) - 1;
  const mathOperation = availableMathOperations[randomOperationIndex];
  const mathExpression = `${firstRandomNum} ${mathOperation} ${secondRandomNum}`;

  return mathExpression;
};

BrainCalc.prototype.checkAnswerCorrectness = function checkAnswerCorrectness(mathExpression) {
  // eslint-disable-next-line no-eval
  this.correctAnswer = eval(mathExpression);

  return this.correctAnswer === parseInt(this.userAnswer, 10);
};
