import { Router } from "express";
import { DailyController } from "../controllers";
const { body } = require("express-validator/check");

import UserMissionController from '../controllers/UserMissionController';
const router: Router = Router();

router.post('/my', [
    body("dailyName").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty(),
    body("userName").notEmpty(),
    body("missions").notEmpty()

], DailyController.createDaily);


router.get('/my/:userId', DailyController.getDaily);


router.get('/', DailyController.getAllDaily);
router.post('/', UserMissionController.addUserDaily);
router.get('/:userId', UserMissionController.getUserDailyById);
router.post('/check', UserMissionController.checkMission);

export default router;
