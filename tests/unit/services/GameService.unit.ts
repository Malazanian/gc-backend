import GameDataAccessor from '../../../src/dataAccessors/GameDataAccessor';
import GameService from '../../../src/services/GameService';
import { Game } from '../../../src/types';

describe('GameService', () => {
  let gameService: GameService;
  const gameDataAccessor = jest.fn() as unknown as GameDataAccessor;

  beforeEach(() => {
    jest.clearAllMocks();
    gameService = new GameService({ dataAccessor: gameDataAccessor });
  });

  const fakeGame: Game = {
    id: '6690cf59-79de-445c-b9f7-04b7f1ee7990',
    start: new Date('2018-10-10T22:00:00.000Z'),
    end: new Date('2018-10-11T01:00:00.000Z'),
    arrive: new Date('2018-10-10T21:30:00.000Z'),
  };

  describe('get', () => {
    it('should get a Game event by ID', async () => {
      const id = '6690cf59-79de-445c-b9f7-04b7f1ee7990';
      gameDataAccessor.getById = jest.fn().mockResolvedValueOnce(fakeGame);

      const result = await gameService.get({ id });
      expect(result).toEqual(fakeGame);
    });

    it('should response with a 404 if the Game event is not found', async () => {
      const error = 'Game not found';
      const id = '6690cf59-79de-445c-b9f7-04b7f1ee7991';

      gameDataAccessor.getById = jest.fn().mockRejectedValueOnce(new Error(error));
      await expect(gameService.get({ id })).rejects.toThrow(error);
    });
  });

  describe('list', () => {
    it('should return a list of Game events', async () => {
      gameDataAccessor.list = jest.fn().mockResolvedValueOnce([fakeGame]);

      const result = await gameService.list();
      expect(result).toEqual([fakeGame]);
    });

    it('should return an empty list if there are no Game events', async () => {
      gameDataAccessor.list = jest.fn().mockResolvedValueOnce([]);

      const result = await gameService.list();
      expect(result).toEqual([]);
    });
  });

  describe('create', () => {
    it('should create a new Game event with the provided data and return the created event', async () => {
      gameDataAccessor.create = jest.fn().mockResolvedValueOnce(fakeGame);
      gameDataAccessor.getById = jest.fn().mockResolvedValueOnce(fakeGame);

      const result = await gameService.create({ game: fakeGame });
      expect(result).toEqual(fakeGame);
    });
  });
});
