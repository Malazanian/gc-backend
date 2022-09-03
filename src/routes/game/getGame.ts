import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getGameHandler } from '../../handlers';

export default async function getGame(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'getGame',
      summary: 'Get information about a Game event',
      params: { $ref: 'getGame-params#' },
    },
  };

  app.get('/games/:id', options, getGameHandler.handle);
}
