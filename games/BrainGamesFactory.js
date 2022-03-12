import BrainEven from './BrainEven.js';
import BrainCalc from './BrainCalc.js';
import BrainGCD from './BrainGCD.js';
import BrainProgression from './BrainProgression.js';

const availableGames = {
  BrainEven,
  BrainCalc,
  BrainGCD,
  BrainProgression,
};
const createdGames = {};

export default function BrainGamesFactory(gameName) {
  if (availableGames[gameName] === undefined) {
    throw new Error(`There is no ${gameName} game!`);
  }

  if (!createdGames[gameName]) {
    createdGames[gameName] = new availableGames[gameName]();
  }

  return createdGames[gameName];
}
