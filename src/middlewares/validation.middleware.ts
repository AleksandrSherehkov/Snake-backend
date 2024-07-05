import { Request, Response, NextFunction } from 'express';

export const validateScore = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, score } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (!score || typeof score !== 'number') {
    return res.status(400).json({ error: 'Invalid score' });
  }

  next();
};
