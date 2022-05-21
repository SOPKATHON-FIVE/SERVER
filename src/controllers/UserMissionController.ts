import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { validationResult } from 'express-validator';
import UserMissionService from '../services/UserMissionService';
import { UserAddDailyDTO } from '../interfaces/userMission/UserAddDailyDTO';
import { CheckMissionDTO } from '../interfaces/userMission/checkMissionDTO';

const addUserDaily = async (req: Request, res: Response) => {
  const userAddDailyDTO: UserAddDailyDTO = req.body;
  try {
    const data = await UserMissionService.addUserDaily(userAddDailyDTO);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const getUserDailyById = async (req: Request, res: Response) => {
  const userId: number = req.params.userId as unknown as number;
  try {
    const data = await UserMissionService.getUserDailyById(userId);
    if (!data) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NULL_VALUE));

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const checkMission = async (req: Request, res: Response) => {
  const checkMissionDTO: CheckMissionDTO = req.body;
  try {
    const data = await UserMissionService.checkMission(checkMissionDTO);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};
export default {
  addUserDaily,
  getUserDailyById,
  checkMission,
};
