import mongoose from 'mongoose';
//import { MissionInfo } from "./DailyInfo";

export interface DailyResponseDto {
  _id: mongoose.Types.ObjectId;
  dailyName: string;
  description: string;
  userId: number;
  userName: string;
  missions?: string[];
  _v?: number;
}
