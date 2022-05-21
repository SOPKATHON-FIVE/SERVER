import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import DailyService from '../services/DailyService';
import { validationResult } from 'express-validator';

const getAllDaily = async (req: Request, res: Response) => {
  try {
    const data = await DailyService.getAllDaily();
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getAllDaily,
};
