#!/usr/bin/env node
import * as common from '../engine/core.js';

console.log('Welcome to the Brain Games!');

const userName = common.getUserName();

console.log(`Hello, ${userName}!`);
