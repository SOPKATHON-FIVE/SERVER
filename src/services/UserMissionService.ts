import { ResponseDaily } from '../interfaces/daily/ResponseDaily';
import { CheckMissionDTO } from '../interfaces/userMission/checkMissionDTO';
import { getUserDailyDTO } from '../interfaces/userMission/getUserDailyDTO';

import { UserAddDailyDTO } from '../interfaces/userMission/UserAddDailyDTO';
import Daily from '../models/Daily';
import User from '../models/User';

const addUserDaily = async (userAddDailyDTO: UserAddDailyDTO) => {
  try {
    const data = new User(userAddDailyDTO);
    await data.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserDailyById = async (userId: number): Promise<getUserDailyDTO[] | null> => {
  try {
    const data = await User.find({
      userId,
    }).populate('dailyId');
    // for (let r of data) {
    //   console.log(r);
    //   const dailyId = r.dailyId;
    //   console.log(dailyId);
    //   const data2 = await Daily.findById(dailyId);
    // }

    if (!data) {
      return null;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const checkMission = async (checkMissionDTO: CheckMissionDTO) => {
  try {
    console.log(checkMissionDTO.completeMissions);

    // const data = await User.findByIdAndUpdate(checkMissionDTO._id, {
    //   completeMissions: checkMissionDTO.completeMissions,
    // });

    const data = await User.updateOne(
      { _id: checkMissionDTO._id },
      {
        $set: { completeMissions: checkMissionDTO.completeMissions },
      },
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default {
  addUserDaily,
  getUserDailyById,
  checkMission,
};
