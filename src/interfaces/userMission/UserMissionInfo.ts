import mongoose from 'mongoose';

export interface UserMissionInfo {
  userId: number;
  userName: string;
  dailyId: mongoose.Types.ObjectId;
  completeMissions: string[];
}

export interface MissionCheckedInfo {
  mission: string;
  check: boolean;
}
