import type GameDataAccessor from '../dataAccessors/GameDataAccessor';
import type { Game } from '../types';

export default class GameService {
  private dataAccessor: GameDataAccessor;

  constructor({ dataAccessor }: { dataAccessor: GameDataAccessor }) {
    this.dataAccessor = dataAccessor;
  }

  public async get({ id }: { id: string }): Promise<Game | undefined> {
    try {
      return await this.dataAccessor.getById<Game>({ id, tableName: 'games' });
    } catch (err: unknown) {
      console.error(`Error in GameService.get: [Game: ${id}]`);
      throw err;
    }
  }

  public async list(): Promise<Game[] | []> {
    try {
      return await this.dataAccessor.list<Game>({ tableName: 'games' });
    } catch (err: unknown) {
      console.error('Error in GameService.list');
      throw err;
    }
  }

  public async create({ game }: { game: Game }): Promise<Game | undefined> {
    try {
      await this.dataAccessor.create<Game>({ data: game, tableName: 'games' });
      return await this.dataAccessor.getById<Game>({ id: game.id, tableName: 'games' });
    } catch (err: unknown) {
      console.error(`Error in GameService.create: [Game: ${JSON.stringify(game)}]`);
      throw err;
    }
  }
}
