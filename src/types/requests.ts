/* eslint-disable no-unused-vars */
import type { Game, ScoringEvent } from './models';

export type GetGameRequest = Pick<Game, 'id'>;
export type CreateGameRequest = Game;

export type GetScoringEventRequest = Pick<ScoringEvent, 'id'>;
export type CreateScoringEventRequest = {
  id: string; // UUID
  game_id: string; // UUID
  timestamp: Date;
  data: ScorekeepingDataRequest;
};

export type ScorekeepingDataRequest = {
  code: ScorekeepingCodeRequest;
  attributes: {
    advances_count: boolean;
    result: ScorekeepingResultRequest;
  };
};

export type ScorekeepingCodeRequest = 'pitch' | 'ball';
export type ScorekeepingResultRequest = 'ball_in_play' | 'strikeout';
