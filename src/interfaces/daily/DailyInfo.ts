import mongoose from 'mongoose';

export interface DailyInfo {
  dailyName: string;
  userId: number;
  userName: string;
  missions: string[];
}
