import type { FastifyPluginAsync } from 'fastify';

export const analyzeRoutes: FastifyPluginAsync = async (app) => {
  app.post('/analyze', async (request, reply) => {
    // TODO: Implement video analysis job creation
    return reply.code(202).send({ job_id: 'placeholder', status: 'queued' });
  });
};
