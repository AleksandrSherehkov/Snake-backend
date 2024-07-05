import { Request, Response } from 'express';
import * as scoreService from '../services/score.service';
import tryCatch from '../utils/tryCatch';

export const addOrUpdateScore = tryCatch(
  async (req: Request, res: Response) => {
    const { name, score } = req.body;
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
  const isUnique = await scoreService.isNameUnique(name);
  res.status(200).json({ isUnique });
});
