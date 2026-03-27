import Fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import { analyzeRoutes } from './routes/analyze.js';
import { jobRoutes } from './routes/jobs.js';
import { streamRoutes } from './routes/streams.js';
import { simulateRoutes } from './routes/simulate.js';

export async function createServer() {
  const app = Fastify({
    logger: true,
    requestIdHeader: 'x-request-id',
  });

  await app.register(cors, { origin: true });
  await app.register(multipart, { limits: { fileSize: 5 * 1024 * 1024 * 1024 } }); // 5GB

  // Routes
  await app.register(analyzeRoutes, { prefix: '/api/v1' });
  await app.register(jobRoutes, { prefix: '/api/v1' });
  await app.register(streamRoutes, { prefix: '/api/v1' });
  await app.register(simulateRoutes, { prefix: '/api/v1' });

  // Health check
  app.get('/health', async () => ({ status: 'ok', service: 'siteread', version: '0.1.0' }));

  return app;
}
