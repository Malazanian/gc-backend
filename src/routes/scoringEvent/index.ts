import createScoringEvent from './createScoringEvent';
import getScoringEvent from './getScoringEvent';
import listScoringEvents from './listScoringEvents';

const scoringEventRoutes = [createScoringEvent, getScoringEvent, listScoringEvents];

export { createScoringEvent, getScoringEvent, listScoringEvents };
export default scoringEventRoutes;
