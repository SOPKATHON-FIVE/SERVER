import mongoose from 'mongoose';
import { MissionCheckedInfo } from './UserMissionInfo';

export interface CheckMissionDTO {
  _id: mongoose.Types.ObjectId;
  userId: number;
  dailyId: mongoose.Types.ObjectId;
  completeMissions?: string[];
}

export interface checkMissionNameDTO {
  mission: string;
}
