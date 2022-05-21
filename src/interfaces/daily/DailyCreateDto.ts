import mongoose from 'mongoose';

export interface DailyCreateDto {
  dailyName: string;
  userId: number;
  userName: string;
  missions: string[];
}
