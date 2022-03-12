#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainProgressionGame = BrainGamesFactory('BrainProgression');

brainProgressionGame.greet().start();
