import mongoose from 'mongoose';
import { MissionCheckedInfo } from './UserMissionInfo';

export interface getUserDailyDTO {
  _id: mongoose.Types.ObjectId;
  userId: number;
  userName: string;
  dailyId: mongoose.Types.ObjectId;
  completeMissions: MissionCheckedInfo[];
}
