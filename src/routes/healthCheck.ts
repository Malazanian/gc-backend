import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { healthCheckHandler } from '../handlers';

export default async function healthCheck(app: FastifyInstance) {
  const options: FastifyPluginOptions = {
    schema: {
      operationId: 'healthCheck',
      summary: 'Get server health',
    },
  };

  app.get('/healthcheck', options, healthCheckHandler.handle);
}
