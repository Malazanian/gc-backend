import { ScorekeepingCodeRequest, ScorekeepingResultRequest } from './requests';

/* eslint-disable no-unused-vars */
export interface Game {
  id: string; // UUID
  start: Date;
  end: Date;
  arrive: Date;
}

export interface ScoringEvent {
  id: string; // UUID
  game_id: string; // UUID
  timestamp: Date;
  code: ScorekeepingCodeRequest;
  advances_count: number;
  result: ScorekeepingResultRequest;
}
