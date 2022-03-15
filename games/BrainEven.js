import * as common from '../utils/common.js';
import { getRandomNumber } from '../utils/helpers.js';

function generateQuestion() {
  return getRandomNumber(100);
}

function generateCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

export default function start() {
  common.greet();

  const userName = common.askForName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  common.start(userName, generateQuestion, generateCorrectAnswer);
}
