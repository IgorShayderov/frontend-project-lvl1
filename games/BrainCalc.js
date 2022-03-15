import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

const availableMathOperations = ['+', '-', '*'];

function generateQuestion() {
  const maxNumber = 100;
  const [firstRandomNum, secondRandomNum] = [maxNumber, maxNumber]
    .map((num) => getRandomNumber(num));
  const randomOperationIndex = getRandomNumber(availableMathOperations.length) - 1;
  const mathOperation = availableMathOperations[randomOperationIndex];
  const mathExpression = `${firstRandomNum} ${mathOperation} ${secondRandomNum}`;

  return mathExpression;
}

function generateCorrectAnswer(mathExpression) {
  // eslint-disable-next-line no-eval
  return `${eval(mathExpression)}`;
}

export default function start() {
  common.greet();

  const userName = common.askForName();

  console.log('What is the result of the expression?');

  common.start(userName, generateQuestion, generateCorrectAnswer);
}
