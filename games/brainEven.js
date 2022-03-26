import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function generateQuestion() {
  const randomNum = getRandomNumber(100);

  return {
    question: randomNum,
    answer: randomNum % 2 === 0 ? 'yes' : 'no',
  };
}

export default function start() {
  const userName = common.askForName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  common.start(userName, generateQuestion);
}
