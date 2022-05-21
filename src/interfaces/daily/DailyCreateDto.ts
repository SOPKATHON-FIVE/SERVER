import mongoose from "mongoose";

export interface DailyCreateDto {
    dailyName: string;
    description: string;
    userId: number;
    userName: string;
    missions: string[];
}



