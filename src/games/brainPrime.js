import start from '../core.js';
import { getRandomNumber } from '../helpers.js';

const isNumberPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAnswerPair = () => {
  const randomNumber = getRandomNumber(100);

  return {
    question: randomNumber,
    answer: isNumberPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => {
  const greetMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  start(greetMessage, generateQuestionAnswerPair);
};
