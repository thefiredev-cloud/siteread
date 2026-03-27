import type { FastifyPluginAsync } from 'fastify';

export const jobRoutes: FastifyPluginAsync = async (app) => {
  app.get('/jobs/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    // TODO: Fetch job from queue/db
    return reply.send({ job_id: id, status: 'processing', progress: 0 });
  });

  app.get('/jobs/:id/report', async (request, reply) => {
    const { id } = request.params as { id: string };
    // TODO: Fetch completed analysis report
    return reply.send({ job_id: id, report: null });
  });
};
