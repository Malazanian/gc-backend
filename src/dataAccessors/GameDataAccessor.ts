import type { Database } from 'sqlite3';
import type { Entity, TableNames } from '../types';
import SqliteDataAccessor from './SqliteDataAccessor';

export default class GameDataAccessor extends SqliteDataAccessor {
  constructor({ db }: { db: Database }) {
    super({ db });
  }

  public async getById<T>({ id, tableName }: { id: string; tableName: TableNames }): Promise<T | undefined> {
    const query = `SELECT * FROM ${tableName} WHERE id = ?`;

    const result = await this.get<T>({ sql: query, params: [id] });
    return result;
  }

  public async list<T>({ tableName }: { tableName: TableNames }): Promise<T[] | []> {
    const query = `SELECT * FROM ${tableName}`;

    const result = await this.all<T>({ sql: query, params: [] });
    return result;
  }

  public async create<T extends Entity>({ data, tableName }: { data: T; tableName: TableNames }) {
    const keys = Object.keys(data)
      .map((key) => key)
      .filter((param) => !!param)
      .join(', ');
    const values = Object.keys(data)
      .map(() => '?')
      .filter((param) => !!param)
      .join(', ');

    const sql = `INSERT INTO ${tableName} (${keys}) VALUES (${values})`;
    const params = [...Object.values(data)];

    try {
      return await this.run({ sql, params });
    } catch (err: unknown) {
      console.error(`Error in GameDataAccessor.create [sql: ${sql}, params: ${params}]`);
      throw err;
    }
  }
}
