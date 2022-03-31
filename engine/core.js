import readlineSync from 'readline-sync';

const necessaryAnswersCount = 3;

function askQuestion(questionText) {
  return readlineSync.question(questionText);
}

export function getUserName() {
  const userName = askQuestion('May I have your name?');

  return userName;
}

export function start(greetMessage, generateQuestionAnswerPair) {
  let correctAnswersCount = 0;
  let userAnswer = '';
  let correctAnswer = '';

  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);
  console.log(greetMessage);

  while (correctAnswersCount < necessaryAnswersCount) {
    const { question, answer } = generateQuestionAnswerPair();

    correctAnswer = answer;

    userAnswer = askQuestion(`Question: ${question}.\nAnswer: `);

    const isAnswerCorrect = userAnswer === correctAnswer;

    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
