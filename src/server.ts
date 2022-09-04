import type { FastifyInstance } from 'fastify';
import config from '../config/config';
import app from './app';
import { sqliteDataAccessor } from './dataAccessors';

const start = async (server: FastifyInstance) => {
  try {
    // Initialize DB to build tables if they don't exist, for the sake of simplicity
    await sqliteDataAccessor.init();
    server.addHook('onClose', async () => {
      await sqliteDataAccessor.close();
    });

    server.listen({ host: config.host, port: Number(config.port) });
  } catch (err: unknown) {
    server.log.error(err);
    process.exit(1);
  }
};

start(app);
