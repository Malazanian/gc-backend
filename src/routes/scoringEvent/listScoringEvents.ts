import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { listScoringEventsHandler } from '../../handlers';

export default async function listScoringEvents(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'listScoringEvents',
      summary: 'Get all ScoringEvents',
    },
  };

  app.get('/scoring-events', options, listScoringEventsHandler.handle);
}
