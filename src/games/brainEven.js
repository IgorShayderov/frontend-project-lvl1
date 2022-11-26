import start from '../core.js';
import { getRandomNumber } from '../helpers.js';

const generateQuestionAnswerPair = () => {
  const randomNum = getRandomNumber(100);

  return {
    question: randomNum,
    answer: randomNum % 2 === 0 ? 'yes' : 'no',
  };
};

export default () => {
  const greetMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  start(greetMessage, generateQuestionAnswerPair);
};
