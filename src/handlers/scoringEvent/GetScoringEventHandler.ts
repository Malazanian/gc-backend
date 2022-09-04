import type { FastifyRequest, FastifyReply } from 'fastify';
import type { GetScoringEventRequest } from '../../types';
import type ScoringEventService from '../../services/ScoringEventService';
import { transformScoringEventResponse } from '../../util.ts/transformResponse';

export default class GetScoringEventHandler {
  private service: ScoringEventService;

  constructor({ service }: { service: ScoringEventService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest<{ Params: GetScoringEventRequest }>, reply: FastifyReply) {
    try {
      const { id } = req.params;

      const result = await this.service.get({ id });

      if (!result) {
        reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: `Could not find Scoring Event with ID of ${id}`,
        });
        return;
      }

      const response = transformScoringEventResponse({ scoringEvent: result });

      reply.status(200).send(response);
    } catch (err: unknown) {
      console.error(`Error in GetScoringEventHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
