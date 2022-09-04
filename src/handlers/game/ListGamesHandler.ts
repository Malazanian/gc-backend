import type { FastifyRequest, FastifyReply } from 'fastify';
import type GameService from '../../services/GameService';

export default class ListGamesHandler {
  private service: GameService;

  constructor({ service }: { service: GameService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await this.service.list();

      reply.status(200).send(result);
    } catch (err: unknown) {
      console.error(`Error in ListGamesHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
