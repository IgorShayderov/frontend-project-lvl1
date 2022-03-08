import readlineSync from 'readline-sync';

import { getRandomNumber } from '../utils/helpers.js';

function BrainEven(userName) {
  this.userName = userName;
  this.randomNum = 0;
  this.correctAnswersCount = 0;
}

BrainEven.prototype.isNumberEven = function isNumberEven() {
  return this.randomNum % 2 === 0;
};

BrainEven.prototype.start = function start() {
  const necessaryAnswersCount = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (this.correctAnswersCount < necessaryAnswersCount) {
    this.randomNum = getRandomNumber(100);

    console.log(`Question: ${this.randomNum}`);

    const userAnswer = readlineSync.question('Answer: ');
    const isAnswerCorrect = this.checkAnswerCorrectness(userAnswer);

    if (isAnswerCorrect) {
      console.log('Correct!');
      this.correctAnswersCount += 1;
    } else {
      const correctAnswer = this.isNumberEven() ? 'yes' : 'no';

      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${this.userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${this.userName}!`);
};

BrainEven.prototype.checkAnswerCorrectness = function checkAnswerCorrectness(userAnswer) {
  const isNumberEven = this.isNumberEven();

  if (isNumberEven && userAnswer === 'yes') {
    return true;
  }

  if (!isNumberEven && userAnswer === 'no') {
    return true;
  }

  return false;
};

export default function BrainEvenSingleton(userName) {
  if (!BrainEvenSingleton.gameInstance) {
    BrainEvenSingleton.gameInstance = new BrainEven(userName);
  }

  return BrainEvenSingleton.gameInstance;
}