import * as common from '../utils/common.js';
import {
  getRandomNumber, calcOperationResult,
} from '../utils/helpers.js';

const availableMathOperations = ['+', '-', '*'];

function generateQuestion() {
  const maxNumber = 100;
  const [firstRandomNum, secondRandomNum] = [maxNumber, maxNumber]
    .map((num) => getRandomNumber(num));
  const randomOperationIndex = getRandomNumber(availableMathOperations.length) - 1;
  const mathOperation = availableMathOperations[randomOperationIndex];
  const mathExpression = `${firstRandomNum} ${mathOperation} ${secondRandomNum}`;

  return {
    question: mathExpression,
    answer: `${calcOperationResult(
      firstRandomNum,
      secondRandomNum,
      mathOperation,
    )}`,
  };
}

export default function start() {
  const userName = common.askForName();

  console.log('What is the result of the expression?');

  common.start(userName, generateQuestion);
}
