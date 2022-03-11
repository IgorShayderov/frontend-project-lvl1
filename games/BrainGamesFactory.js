import BrainEven from './BrainEven.js';
import BrainCalc from './BrainCalc.js';

const availableGames = {
  BrainEven,
  BrainCalc,
};

export default function BrainGamesFactory() {
  return {};
}

BrainGamesFactory.createdGames = {};

BrainGamesFactory.createGame = function createGame(gameName = 'BrainEven') {
  if (availableGames[gameName] === undefined) {
    throw new Error(`There is no ${gameName} game!`);
  }

  if (!this.createdGames[gameName]) {
    this.createdGames[gameName] = new availableGames[gameName]();
  }

  return this.createdGames[gameName];
};
