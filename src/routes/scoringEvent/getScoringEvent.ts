import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getScoringEventHandler } from '../../handlers';

export default async function getScoringEvent(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'getScoringEvent',
      summary: 'Get information about a ScoringEvent',
      params: { $ref: 'getScoringEvent-params#' },
    },
  };

  app.get('/scoring-events/:id', options, getScoringEventHandler.handle);
}
