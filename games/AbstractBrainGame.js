import readlineSync from 'readline-sync';

export default function BrainGame() {
  this.$super = BrainGame.prototype;
  this.userName = 'noname';
  this.correctAnswersCount = 0;
  this.necessaryAnswersCount = 3;
  this.userAnswer = '';
  this.correctAnswer = '';
}

BrainGame.prototype.start = function start() {
  try {
    while (this.correctAnswersCount < this.necessaryAnswersCount) {
      const question = this.generateQuestion();

      console.log(`Question: ${question}`);

      this.userAnswer = this.askQuestion('Answer: ');

      const isAnswerCorrect = this.checkAnswerCorrectness();

      if (isAnswerCorrect) {
        console.log('Correct!');
        this.correctAnswersCount += 1;
      } else {
        throw new Error('Lost game.');
      }
    }

    console.log(`Congratulations, ${this.userName}!`);
  } catch (error) {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
};

BrainGame.prototype.greet = function greet() {
  console.log('Welcome to the Brain Games!');

  this.userName = this.askQuestion('May I have your name?');

  console.log(`Hello, ${this.userName}!`);

  return this;
};

BrainGame.prototype.askQuestion = function askQuestion(questionText) {
  return readlineSync.question(questionText);
};

BrainGame.prototype.checkAnswerCorrectness = function checkAnswerCorrectness() {
  return this.correctAnswer === this.userAnswer;
};
