import { Application, Request, Response } from 'express';
import { api } from './api.route.js';
import { apiLimiter } from '../middleware/rateLimit.js';

export const mountRoutes = (app: Application) => {
  app.use('/api', apiLimiter, api);
  app.use('/', (req: Request, res: Response) => {
    res.send('API running');
  });
};
