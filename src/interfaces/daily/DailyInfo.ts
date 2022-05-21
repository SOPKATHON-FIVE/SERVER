import mongoose from 'mongoose';

export interface DailyInfo {
    dailyName: string;
    description: string;
    userId: number;
    userName: string;
    missions: string[];
}

