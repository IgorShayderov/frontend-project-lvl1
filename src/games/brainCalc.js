import * as core from '../core.js';
import {
  getRandomNumber, calcOperationResult,
} from '../helpers.js';

const availableMathOperations = ['+', '-', '*'];

function generateQuestionAnswerPair() {
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
  const greetMessage = 'What is the result of the expression?';

  core.start(greetMessage, generateQuestionAnswerPair);
}
