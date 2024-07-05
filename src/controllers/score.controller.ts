import { Request, Response } from 'express';
import * as scoreService from '../services/score.service';
import tryCatch from '../utils/tryCatch';

export const addScore = tryCatch(async (req: Request, res: Response) => {
  const { name, score } = req.body;
  const newScore = await scoreService.addScore(name, score);
  res.status(201).json(newScore);
});

export const getScores = tryCatch(async (req: Request, res: Response) => {
  const scores = await scoreService.getScores();
  res.status(200).json(scores);
});
