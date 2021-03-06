import * as core from '../core.js';
import { getRandomNumber } from '../helpers.js';

function generateQuestionAnswerPair() {
  const randomNum = getRandomNumber(100);

  return {
    question: randomNum,
    answer: randomNum % 2 === 0 ? 'yes' : 'no',
  };
}

export default function start() {
  const greetMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  core.start(greetMessage, generateQuestionAnswerPair);
}
