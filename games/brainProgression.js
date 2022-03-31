import * as core from '../engine/core.js';
import { getRandomNumber, calcOperationResult } from '../utils/helpers.js';

const availableMathOperations = ['+', '-'];

function createProgression(numbersCount) {
  const highestMathOperationIndex = availableMathOperations.length - 1;
  const arithmeticOperation = availableMathOperations[
    getRandomNumber(highestMathOperationIndex, 0)
  ];
  const consequentDifference = getRandomNumber(10);
  const progressionNumbers = [getRandomNumber(100)];

  for (let i = 1; i < numbersCount; i += 1) {
    const lastNumber = progressionNumbers[progressionNumbers.length - 1];
    const nextNumber = calcOperationResult(
      lastNumber,
      consequentDifference,
      arithmeticOperation,
    );

    progressionNumbers.push(nextNumber);
  }

  return progressionNumbers;
}

function generateQuestionAnswerPair() {
  const minimalNumbersCount = 5;
  const numbersCount = getRandomNumber(5) + minimalNumbersCount;
  const numberToHideIndex = getRandomNumber(numbersCount - 1, 0);
  const progression = createProgression(numbersCount);

  const hiddenNumber = `${progression[numberToHideIndex]}`;
  progression.splice(numberToHideIndex, 1, '..');

  return {
    question: progression.join(' '),
    answer: hiddenNumber,
  };
}

export default function start() {
  const greetMessage = 'What number is missing in the progression?';

  core.start(greetMessage, generateQuestionAnswerPair);
}
