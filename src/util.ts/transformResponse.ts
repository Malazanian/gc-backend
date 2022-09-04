import { CreateScoringEventRequest } from '../types';
import { ScoringEvent } from '../types/models';

export const transformScoringEventResponse = ({ scoringEvent }: { scoringEvent: ScoringEvent }): CreateScoringEventRequest => {
  const { id, game_id, timestamp, code, advances_count, result } = scoringEvent;

  const response: CreateScoringEventRequest = {
    id,
    game_id,
    timestamp,
    data: {
      code,
      attributes: {
        advances_count: !!advances_count,
        result,
      },
    },
  };

  return response;
};
