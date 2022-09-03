import GameService from './GameService';
import ScoringEventService from './ScoringEventService';
import { gameDataAccessor } from '../dataAccessors';

const gameService = new GameService({ dataAccessor: gameDataAccessor });
const scoringEventService = new ScoringEventService({ dataAccessor: gameDataAccessor });

const services = [gameService, scoringEventService];

export { gameService, scoringEventService };
export default services;
