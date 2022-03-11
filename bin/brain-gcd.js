#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainGCD = BrainGamesFactory('BrainGCD');

brainGCD.greet().start();
