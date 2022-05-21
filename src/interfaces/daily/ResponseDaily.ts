import mongoose from 'mongoose';

export interface ResponseDaily {
  _id: mongoose.Schema.Types.ObjectId;
  dailyName: string;
  description: string;
  userId: number;
  userName: string;
  missions: ResponseMissionInfo[];
}

export interface ResponseMissionInfo {
  mission: string;
}
