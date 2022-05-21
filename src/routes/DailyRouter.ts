import { Router } from 'express';
import { check } from 'express-validator';
import { DailyController } from '../controllers';
import UserMissionController from '../controllers/UserMissionController';
const router: Router = Router();

router.get('/', DailyController.getAllDaily);
router.post('/', UserMissionController.addUserDaily);
router.get('/:userId', UserMissionController.getUserDailyById);
router.post('/check', UserMissionController.checkMission);
export default router;
