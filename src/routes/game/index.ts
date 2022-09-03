import getGame from './getGame';
import createGame from './createGame';
import listGames from './listGames';

const gameRoutes = [getGame, createGame, listGames];

export { getGame, createGame, listGames };
export default gameRoutes;
