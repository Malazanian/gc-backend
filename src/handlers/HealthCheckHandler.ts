import { FastifyRequest, FastifyReply } from 'fastify';

export default class HealthCheckHandler {
  constructor() {
    this.handle = this.handle.bind(this);
  }

  public async handle(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const healthCheck = {
        ok: true,
      };
      reply.status(200).send(healthCheck);
    } catch (err: unknown) {
      console.error(`Error in HealthCheckHandler.handle: [err: ${err}]`);
      reply.status(500).send(err);
    }
  }
}
