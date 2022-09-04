import GameDataAccessor from '../../../src/dataAccessors/GameDataAccessor';
import ScoringEventService from '../../../src/services/ScoringEventService';
import { Game, ScoringEvent } from '../../../src/types';

describe('ScoringEventService', () => {
  let scoringEventService: ScoringEventService;
  const gameDataAccessor = jest.fn() as unknown as GameDataAccessor;

  beforeEach(() => {
    jest.clearAllMocks();
    scoringEventService = new ScoringEventService({ dataAccessor: gameDataAccessor });
  });

  const fakeGame: Game = {
    id: '6690cf59-79de-445c-b9f7-04b7f1ee7990',
    start: new Date('2018-10-10T22:00:00.000Z'),
    end: new Date('2018-10-11T01:00:00.000Z'),
    arrive: new Date('2018-10-10T21:30:00.000Z'),
  };

  const fakeScoringEvent: ScoringEvent = {
    id: '486585db-75f2-467d-a825-b37777c96529',
    game_id: '6690cf59-79de-445c-b9f7-04b7f1ee7990',
    timestamp: new Date('2018-10-10T22:03:56.413Z'),
    code: 'pitch',
    advances_count: 1,
    result: 'ball_in_play',
  };

  describe('get', () => {
    it('should get a ScoringEvent event by ID', async () => {
      const id = '486585db-75f2-467d-a825-b37777c96529';
      gameDataAccessor.getById = jest.fn().mockResolvedValueOnce(fakeScoringEvent);

      const result = await scoringEventService.get({ id });
      expect(result).toEqual(fakeScoringEvent);
    });

    it('should response with a 404 if the ScoringEvent is not found', async () => {
      const error = 'ScoringEvent not found';
      const id = '486585db-75f2-467d-a825-b37777c96528';

      gameDataAccessor.getById = jest.fn().mockRejectedValueOnce(new Error(error));
      await expect(scoringEventService.get({ id })).rejects.toThrow(error);
    });
  });

  describe('list', () => {
    it('should return a list of ScoringEvents', async () => {
      gameDataAccessor.list = jest.fn().mockResolvedValueOnce([fakeScoringEvent]);

      const result = await scoringEventService.list();
      expect(result).toEqual([fakeScoringEvent]);
    });

    it('should return an empty list if there are no ScoringEvents', async () => {
      gameDataAccessor.list = jest.fn().mockResolvedValueOnce([]);

      const result = await scoringEventService.list();
      expect(result).toEqual([]);
    });
  });

  describe('create', () => {
    it('should create a new ScoringEvent with the provided data and return the created event', async () => {
      gameDataAccessor.getById = jest.fn().mockResolvedValueOnce(fakeGame).mockResolvedValueOnce(fakeScoringEvent);
      gameDataAccessor.create = jest.fn().mockResolvedValueOnce(fakeScoringEvent);

      const result = await scoringEventService.create({ scoringEvent: fakeScoringEvent });
      expect(result).toEqual(fakeScoringEvent);
    });

    it('should fail to create a new ScoringEvent if the provided Game ID does not exist', async () => {
      gameDataAccessor.getById = jest.fn().mockResolvedValueOnce(undefined);

      const result = await scoringEventService.create({ scoringEvent: fakeScoringEvent });
      expect(result).toEqual(undefined);
    });
  });
});
