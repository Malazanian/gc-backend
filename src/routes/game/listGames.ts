import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { listGamesHandler } from '../../handlers';

export default async function listGames(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'listGames',
      summary: 'Get all Game events',
    },
  };

  app.get('/games', options, listGamesHandler.handle);
}
