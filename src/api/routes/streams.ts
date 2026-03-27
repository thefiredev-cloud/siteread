import type { FastifyPluginAsync } from 'fastify';

export const streamRoutes: FastifyPluginAsync = async (app) => {
  app.get('/streams', async () => ({ streams: [] }));
  app.post('/streams', async (request, reply) => {
    // TODO: Register stream for continuous monitoring
    return reply.code(201).send({ stream_id: 'placeholder', status: 'connecting' });
  });
};
