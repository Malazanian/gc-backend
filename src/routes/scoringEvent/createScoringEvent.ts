import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createScoringEventHandler } from '../../handlers';

export default async function createScoringEvent(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'createScoringEvent',
      summary: 'Create a new ScoringEvent',
      body: { $ref: 'createScoringEvent-body#' },
    },
  };

  app.post('/scoring-events', options, createScoringEventHandler.handle);
}
