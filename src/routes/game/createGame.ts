import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createGameHandler } from '../../handlers';

export default async function createGame(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'createGame',
      summary: 'Create a new Game event',
      body: { $ref: 'createGame-body#' },
    },
  };

  app.post('/games', options, createGameHandler.handle);
}
