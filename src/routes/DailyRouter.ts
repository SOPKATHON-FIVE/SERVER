import { Router } from "express";
import { DailyController } from "../controllers";
const { body } = require("express-validator/check");

const router: Router = Router();

router.post('/my', [
    body("dailyName").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty(),
    body("userName").notEmpty(),
    body("missions").notEmpty()

], DailyController.createDaily);


router.get('/my/:userId', DailyController.getDaily);


export default router;
