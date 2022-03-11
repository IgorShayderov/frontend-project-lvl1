import readlineSync from 'readline-sync';

export default function BrainGame() {
  this.$super = BrainGame.prototype;
  this.userName = 'noname';
  this.correctAnswersCount = 0;
  this.necessaryAnswersCount = 3;
  this.userAnswer = '';
  this.correctAnswer = '';
}

BrainGame.prototype.start = function start(loopCallback) {
  try {
    while (this.correctAnswersCount < this.necessaryAnswersCount) {
      loopCallback();
    }

    console.log(`Congratulations, ${this.userName}!`);
  } catch (error) {
    console.log(`'${this.userAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    console.log(`Let's try again, ${this.userName}!`);
  }
};

BrainGame.prototype.greet = function greet() {
  console.log('Welcome to the Brain Games!');

  this.userName = this.askQuestion('What is your name?');

  console.log(`Hello, ${this.userName}!`);

  return this;
};

BrainGame.prototype.askQuestion = function askQuestion(questionText) {
  return readlineSync.question(questionText);
};
