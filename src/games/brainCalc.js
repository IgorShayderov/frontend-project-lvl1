import start from '../core.js';
import {
  getRandomNumber, calcOperationResult,
} from '../helpers.js';

const availableMathOperations = ['+', '-', '*'];

const generateQuestionAnswerPair = () => {
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
};

export default () => {
  const greetMessage = 'What is the result of the expression?';

  start(greetMessage, generateQuestionAnswerPair);
};
