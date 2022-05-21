//router index file
import { Router } from 'express';

import DailyRouter from './DailyRouter';

const router = Router();
router.use('/daily', DailyRouter);

export default router;
