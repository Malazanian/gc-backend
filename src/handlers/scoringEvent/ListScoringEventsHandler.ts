import type { FastifyRequest, FastifyReply } from 'fastify';
import type ScoringEventService from '../../services/ScoringEventService';
import { transformScoringEventResponse } from '../../util.ts/transformResponse';

export default class ListScoringEventsHandler {
  private service: ScoringEventService;

  constructor({ service }: { service: ScoringEventService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await this.service.list();

      const response = result.map((event) => transformScoringEventResponse({ scoringEvent: event }));

      reply.status(200).send(response);
    } catch (err: unknown) {
      console.error(`Error in ListScoringEventsHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
