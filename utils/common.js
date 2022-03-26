import readlineSync from 'readline-sync';

const necessaryAnswersCount = 3;

function askQuestion(questionText) {
  return readlineSync.question(questionText);
}

export function askForName() {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name?');

  console.log(`Hello, ${userName}!`);

  return userName;
}

export function start(userName, generateQuestion) {
  let correctAnswersCount = 0;
  let userAnswer = '';
  let correctAnswer = '';

  while (correctAnswersCount < necessaryAnswersCount) {
    const { question, answer } = generateQuestion();

    correctAnswer = answer;

    console.log(`Question: ${question}`);

    userAnswer = askQuestion('Answer: ');

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
