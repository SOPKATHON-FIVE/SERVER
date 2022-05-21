import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { DailyCreateDto } from "../interfaces/daily/DailyCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import DailyService from "../services/DailyService";

/**
 * @router POST /daily/my
 * @desc Create Daily
 * @access Public
 */

const createDaily = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE))
    }
    const dailyCreateDto: DailyCreateDto = req.body;

    try {
        const data = await DailyService.createDaily(dailyCreateDto);
        if (!data) res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_DAILY_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }
}

/**
 * @route GET /daily/my/:userId
 * @desc Get My Daily by userId
 * @access Public
 */
const getDaily = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const data = await DailyService.getDaily(userId);
        if (!data) {
            res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_DAILY_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}


export default {
    createDaily,
    getDaily,
};

