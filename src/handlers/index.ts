import { gameService, scoringEventService } from '../services';
import HealthCheckHandler from './HealthCheckHandler';
import { CreateGameHandler, GetGameHandler, ListGamesHandler } from './game';
import { CreateScoringEventHandler, GetScoringEventHandler, ListScoringEventsHandler } from './scoringEvent';

const healthCheckHandler = new HealthCheckHandler();

const getGameHandler = new GetGameHandler({ service: gameService });
const createGameHandler = new CreateGameHandler({ service: gameService });
const listGamesHandler = new ListGamesHandler({ service: gameService });

const createScoringEventHandler = new CreateScoringEventHandler({ service: scoringEventService });
const getScoringEventHandler = new GetScoringEventHandler({ service: scoringEventService });
const listScoringEventsHandler = new ListScoringEventsHandler({ service: scoringEventService });

const handlers = [healthCheckHandler, getGameHandler, createGameHandler, listGamesHandler, createScoringEventHandler, getScoringEventHandler, listScoringEventsHandler];

export { healthCheckHandler, getGameHandler, createGameHandler, listGamesHandler, createScoringEventHandler, getScoringEventHandler, listScoringEventsHandler };
export default handlers;
