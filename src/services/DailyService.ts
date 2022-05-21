import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { DailyCreateDto } from '../interfaces/daily/DailyCreateDto';
import { DailyInfo } from '../interfaces/daily/DailyInfo';
import { DailyResponseDto } from '../interfaces/daily/DailyResponseDto';
import Daily from '../models/Daily';
import { ResponseDaily } from '../interfaces/daily/ResponseDaily';

const createDaily = async (dailyCreateDto: DailyCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const daily = new Daily(dailyCreateDto);
    await daily.save();

    const data = {
      _id: daily._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDaily = async (userId: string): Promise<DailyResponseDto[] | null> => {
  try {
    const daily = await Daily.find({
      userId: {
        $in: userId,
      },
    });

    if (!daily) return null;
    return daily;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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
  createDaily,
  getDaily,
};
