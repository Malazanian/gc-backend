import SQLite3 from 'sqlite3';
import config from '../../config/config';
import GameDataAccessor from './GameDataAccessor';
import SqliteDataAccessor from './SqliteDataAccessor';

// const db = new SQLite3.Database(config.db || ':memory:');
const db = process.env.NODE_ENV === 'test' ? new SQLite3.Database(':memory:') : new SQLite3.Database(config.db);

const sqliteDataAccessor = new SqliteDataAccessor({ db });
const gameDataAccessor = new GameDataAccessor({ db });

const dataAccessors = [sqliteDataAccessor, gameDataAccessor];

export { sqliteDataAccessor, gameDataAccessor };
export default dataAccessors;
