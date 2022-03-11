#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainCalcGame = BrainGamesFactory.createGame('BrainCalc');

brainCalcGame.greet().start();
