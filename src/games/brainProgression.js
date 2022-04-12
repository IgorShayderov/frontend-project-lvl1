import * as core from '../core.js';
import { getRandomNumber, calcOperationResult } from '../helpers.js';

function createProgression(numbersCount) {
  const consequentDifference = getRandomNumber(10);
  const progressionNumbers = [getRandomNumber(100)];

  for (let i = 1; i < numbersCount; i += 1) {
    const lastNumber = progressionNumbers[progressionNumbers.length - 1];
    const nextNumber = calcOperationResult(
      lastNumber,
      consequentDifference,
      '+',
    );

    progressionNumbers.push(nextNumber);
  }

  return progressionNumbers;
}

function generateQuestionAnswerPair() {
  const minimalNumbersCount = 5;
  const numbersCount = getRandomNumber(5) + minimalNumbersCount;
  const hiddenNumberIndex = getRandomNumber(numbersCount - 1, 0);
  const progression = createProgression(numbersCount);

  const hiddenNumber = `${progression[hiddenNumberIndex]}`;
  progression.splice(hiddenNumberIndex, 1, '..');

  return {
    question: progression.join(' '),
    answer: hiddenNumber,
  };
}

export default function start() {
  const greetMessage = 'What number is missing in the progression?';

  core.start(greetMessage, generateQuestionAnswerPair);
}
