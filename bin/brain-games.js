#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import BrainEven from '../games/BrainEven.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('What is your name?');

console.log(`Hello, ${userName}!`);

BrainEven(userName).start();
