import type GameDataAccessor from '../dataAccessors/GameDataAccessor';
import { Game, ScoringEvent } from '../types';

export default class ScoringEventService {
  private dataAccessor: GameDataAccessor;

  constructor({ dataAccessor }: { dataAccessor: GameDataAccessor }) {
    this.dataAccessor = dataAccessor;
  }

  public async get({ id }: { id: string }): Promise<ScoringEvent | undefined> {
    try {
      return await this.dataAccessor.getById<ScoringEvent>({ id, tableName: 'scoring_events' });
    } catch (err: unknown) {
      console.error(`Error in ScoringEventService.get: [id: ${id}]`);
      throw err;
    }
  }

  public async list(): Promise<ScoringEvent[] | []> {
    try {
      return await this.dataAccessor.list<ScoringEvent>({ tableName: 'scoring_events' });
    } catch (err: unknown) {
      console.error('Error in ScoringEventService.list');
      throw err;
    }
  }

  public async create({ scoringEvent }: { scoringEvent: ScoringEvent }): Promise<ScoringEvent | undefined> {
    try {
      const validGame = await this.dataAccessor.getById<Game>({ id: scoringEvent.game_id, tableName: 'games' });

      if (!validGame) {
        return undefined;
      }

      await this.dataAccessor.create<ScoringEvent>({ data: scoringEvent, tableName: 'scoring_events' });
      return await this.dataAccessor.getById<ScoringEvent>({ id: scoringEvent.id, tableName: 'scoring_events' });
    } catch (err: unknown) {
      console.error(`Error in ScoringEventService.create: [ScoringEvent: ${JSON.stringify(scoringEvent)}]`);
      throw err;
    }
  }
}
