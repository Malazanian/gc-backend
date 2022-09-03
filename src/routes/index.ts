import healthCheck from './healthCheck';
import gameRoutes from './game';
import scoringEventRoutes from './scoringEvent';

const routes = [healthCheck, ...gameRoutes, ...scoringEventRoutes];

export default routes;
