import { Router } from 'express';
import {
  addOrUpdateScore,
  getScores,
  checkUniqueName,
} from '../controllers/score.controller';
import { validateScore } from '../middlewares/validation.middleware';

const router = Router();

router.post('/scores', validateScore, addOrUpdateScore);
router.get('/scores', getScores);
router.post('/check-unique-name', checkUniqueName);

export default router;
