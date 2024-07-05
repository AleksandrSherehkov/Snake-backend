import { Request, Response, NextFunction } from 'express';
import { scoreSchema } from '../validations/score.validation';

export const validateScore = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = scoreSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
