import readlineSync from 'readline-sync';

const gameOptions = {
  necessaryAnswersCount: 3,
};

function askQuestion(questionText) {
  return readlineSync.question(questionText);
}

export function greet() {
  console.log('Welcome to the Brain Games!');
}

export function askForName() {
  const userName = askQuestion('May I have your name?');

  console.log(`Hello, ${userName}!`);

  return userName;
}

export function start(userName, generateQuestion, generateCorrectAnswer) {
  const { necessaryAnswersCount } = gameOptions;
  let correctAnswersCount = 0;
  let userAnswer = '';
  let correctAnswer = '';

  try {
    while (correctAnswersCount < necessaryAnswersCount) {
      const question = generateQuestion();
      correctAnswer = generateCorrectAnswer(question);

      console.log(`Question: ${question}`);

      userAnswer = askQuestion('Answer: ');

      const isAnswerCorrect = userAnswer === correctAnswer;

      if (isAnswerCorrect) {
        console.log('Correct!');
        correctAnswersCount += 1;
      } else {
        throw new Error('Lost game.');
      }
    }

    console.log(`Congratulations, ${userName}!`);
  } catch (error) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}
