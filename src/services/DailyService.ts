import { ResponseDaily } from '../interfaces/daily/ResponseDaily';
import Daily from '../models/Daily';

const getAllDaily = async (): Promise<ResponseDaily[]> => {
  try {
    const data = await Daily.find();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getAllDaily,
};
