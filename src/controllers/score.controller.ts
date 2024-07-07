import { Request, Response } from 'express';
import * as scoreService from '../services/score.service';
import tryCatch from '../utils/tryCatch';
import { HttpError } from '../utils/HttpError';

export const addOrUpdateScore = tryCatch(
  async (req: Request, res: Response) => {
    const { name, score } = req.body;

    if (name === undefined || score === undefined) {
      throw new HttpError(400, 'Name and score are required');
    }
    const updatedScore = await scoreService.addOrUpdateScore(name, score);
    res.status(201).json(updatedScore);
  }
);

export const getScores = tryCatch(async (req: Request, res: Response) => {
  const scores = await scoreService.getScores();
  res.status(200).json(scores);
});

export const checkUniqueName = tryCatch(async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    throw new HttpError(400);
  }
  const isUnique = await scoreService.isNameUnique(name);
  res.status(200).json({ isUnique });
});
