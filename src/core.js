import readlineSync from 'readline-sync';

const necessaryAnswersCount = 3;

export default (greetMessage, generateQuestionAnswerPair) => {
  let correctAnswersCount = 0;

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(greetMessage);

  while (correctAnswersCount < necessaryAnswersCount) {
    const { question, answer: correctAnswer } = generateQuestionAnswerPair();
    const userAnswer = readlineSync.question(`Question: ${question}.\nAnswer: `);
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
};
