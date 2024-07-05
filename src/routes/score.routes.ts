import { Router } from 'express';
import { addScore, getScores } from '../controllers/score.controller';
import { validateScore } from '../middlewares/validation.middleware';

const router = Router();

router.post('/scores', validateScore, addScore);
router.get('/scores', getScores);

export default router;
