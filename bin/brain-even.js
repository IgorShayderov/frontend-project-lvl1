#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainEvenGame = BrainGamesFactory.createGame('BrainEven');

brainEvenGame().greet().start();
