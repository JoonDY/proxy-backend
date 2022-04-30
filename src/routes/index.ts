import { Application, Request, Response } from 'express';
import { proxyRouter } from './api.proxy.route.js';
import { golfRouter } from './api.golf.route.js';
import { userRouter } from './user.route.js';
import { apiLimiter } from '../middleware/rateLimit.js';

export const mountRoutes = (app: Application) => {
  app.use('/api/golf', golfRouter);
  app.use('/api/proxy', apiLimiter, proxyRouter);
  app.use('/user', userRouter);
  app.use('/', (req: Request, res: Response) => {
    res.send('API running');
  });
};
