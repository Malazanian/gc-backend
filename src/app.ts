import Fastify from 'fastify';
import schemas from './schemas';
import router from './router';

const app = Fastify({
  logger: true,
  ajv: {
    customOptions: {
      coerceTypes: 'array',
    },
  },
});

schemas(app);
router(app);

export default app;
