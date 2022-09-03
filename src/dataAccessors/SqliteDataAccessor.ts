import type { Database, RunResult } from 'sqlite3';

export default class SqliteDataAccessor {
  protected db: Database;

  constructor({ db }: { db: Database }) {
    this.db = db;
  }

  public async init(): Promise<void> {
    try {
      this.db.run(`
        CREATE TABLE IF NOT EXISTS games (
          id TEXT NOT NULL PRIMARY KEY,
          start TEXT NOT NULL,
          end TEXT NOT NULL,
          arrive TEXT NOT NULL
        )
      `);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS scoring_events (
          id TEXT NOT NULL PRIMARY KEY,
          game_id TEXT NOT NULL,
          timestamp TEXT NOT NULL,
          code TEXT NOT NULL,
          advances_count INTEGER NOT NULL,
          result TEXT NOT NULL
        )
      `);
    } catch (err: unknown) {
      console.error(err);
    }
  }

  public async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.close((err: Error | null) => (err ? reject(err) : resolve()));
    });
  }

  public async get<T>({ sql, params }: { sql: string; params: any }): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err: Error | null, row: T) => (err ? reject(err) : resolve(row)));
    });
  }

  public async run({ sql, params }: { sql: string; params: any }): Promise<RunResult> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (result: RunResult, err: Error | null) => (err ? reject(err) : resolve(result)));
    });
  }

  public async all<T>({ sql, params }: { sql: string; params: any[] }): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err: Error | null, rows: T[]) => (err ? reject(err) : resolve(rows)));
    });
  }
}
