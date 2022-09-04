import { Game, ScoringEvent } from './models';

export * from './models';
export * from './requests';

export type TableNames = 'games' | 'scoring_events';
export type Entity = Game | ScoringEvent;
