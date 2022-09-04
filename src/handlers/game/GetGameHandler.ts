import type { FastifyRequest, FastifyReply } from 'fastify';
import type { GetGameRequest } from '../../types';
import type GameService from '../../services/GameService';

export default class GetGameHandler {
  private service: GameService;

  constructor({ service }: { service: GameService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest<{ Params: GetGameRequest }>, reply: FastifyReply) {
    try {
      const { id } = req.params;

      const result = await this.service.get({ id });

      if (!result) {
        reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message: `Could not find Game with ID of ${id}`,
        });
        return;
      }

      reply.status(200).send(result);
    } catch (err: unknown) {
      console.error(`Error in GetGameHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
