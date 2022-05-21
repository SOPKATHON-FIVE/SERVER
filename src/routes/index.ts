import { Router } from 'express';
import DailyRouter from "./DailyRouter";


const router: Router = Router();
router.use('/daily', DailyRouter);


export default router;