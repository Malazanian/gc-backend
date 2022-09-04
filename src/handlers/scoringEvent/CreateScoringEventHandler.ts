import type { FastifyRequest, FastifyReply } from 'fastify';
import type { CreateScoringEventRequest, ScoringEvent } from '../../types';
import type ScoringEventService from '../../services/ScoringEventService';
import { transformScoringEventResponse } from '../../util.ts/transformResponse';

export default class CreateScoringEventHandler {
  private service: ScoringEventService;

  constructor({ service }: { service: ScoringEventService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest<{ Body: CreateScoringEventRequest }>, reply: FastifyReply) {
    try {
      const { id, game_id, timestamp, data } = req.body;

      const scoringEvent: ScoringEvent = {
        id,
        game_id,
        timestamp,
        code: data.code,
        advances_count: !data.attributes.advances_count ? 0 : 1,
        result: data.attributes.result,
      };

      const result = await this.service.create({ scoringEvent });

      if (!result) {
        reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: 'Game ID not found. Game ID must already exist for a Scoring Event to be created',
        });
        return;
      }

      const response = transformScoringEventResponse({ scoringEvent: result });

      reply.status(201).send(response);
    } catch (err: unknown) {
      console.error(`Error in CreateScoringEventHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
