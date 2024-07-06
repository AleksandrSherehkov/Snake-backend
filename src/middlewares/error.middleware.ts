import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { HttpError } from '../utils/HttpError';

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
};
