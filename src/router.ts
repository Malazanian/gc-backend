import type { FastifyInstance } from 'fastify';
import routes from './routes';

export default async function router(app: FastifyInstance) {
  for (const route of routes) {
    app.register(route);
  }
}
