#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainCalcGame = BrainGamesFactory('BrainCalc');

brainCalcGame.greet().start();
