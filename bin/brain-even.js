#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainEvenGame = BrainGamesFactory('BrainEven');

brainEvenGame.greet().start();
