import type { FastifyInstance } from 'fastify';
import { createGame, getGame } from './game';
import { createScoringEvent, getScoringEvent } from './scoringEvent';

const AppSchemas = [createGame, getGame, createScoringEvent, getScoringEvent];

export default (app: FastifyInstance) => {
  for (const appSchema of AppSchemas) {
    app.addSchema(appSchema);
  }
};
