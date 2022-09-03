import type { FastifyRequest, FastifyReply } from 'fastify';
import type { CreateGameRequest } from '../../types';
import type GameService from '../../services/GameService';

export default class CreateGameHandler {
  private service: GameService;

  constructor({ service }: { service: GameService }) {
    this.service = service;
    this.handle = this.handle.bind(this);
  }

  async handle(req: FastifyRequest<{ Body: CreateGameRequest }>, reply: FastifyReply) {
    try {
      const game = req.body;

      const result = await this.service.create({ game });

      reply.status(201).send(result);
    } catch (err: unknown) {
      console.error(`Error in CreateGameHandler.handle: [${err}]`);
      reply.status(400).send(err);
    }
  }
}
