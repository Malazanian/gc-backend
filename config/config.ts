export default {
  db: process.env.DB || 'database.sqlite3',
  host: process.env.HOST ?? '0.0.0.0',
  port: process.env.PORT ?? 3000,
};
