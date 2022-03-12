#!/usr/bin/env node
import BrainGamesFactory from '../games/BrainGamesFactory.js';

const brainPrime = BrainGamesFactory('BrainPrime');

brainPrime.greet().start();
