#!/usr/bin/env node
import readlineSync from 'readline-sync';
import BrainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('What is your name?');

console.log(`Hello, ${userName}!`);

BrainEven(userName).start();
