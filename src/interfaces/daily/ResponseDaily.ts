import mongoose from 'mongoose';

export interface ResponseDaily {
  _id: mongoose.Schema.Types.ObjectId;
  dailyName: string;
  userId: number;
  userName: string;
  missions: string[];
}
