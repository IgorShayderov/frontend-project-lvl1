import * as common from '../utils/common.js';
import { getRandomNumber, calcOperationResult } from '../utils/helpers.js';

const availableMathOperations = ['+', '-'];

function generateQuestion() {
  const minimalNumbersCount = 5;
  const numbersCount = getRandomNumber(5) + minimalNumbersCount;
  const numberToHideIndex = getRandomNumber(numbersCount) - 1;
  const arithmeticOperation = availableMathOperations[getRandomNumber(2) - 1];
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

  const hiddenNumber = `${progressionNumbers[numberToHideIndex]}`;
  progressionNumbers.splice(numberToHideIndex, 1, '..');

  return {
    question: progressionNumbers.join(' '),
    answer: hiddenNumber,
  };
}

export default function start() {
  const userName = common.askForName();

  console.log('What number is missing in the progression?');

  common.start(userName, generateQuestion);
}
