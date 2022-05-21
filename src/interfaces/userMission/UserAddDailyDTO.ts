import mongoose from 'mongoose';

export interface UserAddDailyDTO {
  userId: number;
  userName: string;
  dailyId: mongoose.Types.ObjectId;
}
