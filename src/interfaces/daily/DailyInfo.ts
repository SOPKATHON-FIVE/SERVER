import mongoose from "mongoose";

export interface DailyInfo {
    dailyName: string;
    userId: number;
    missions: MissionInfo[];
}

export interface MissionInfo {
    mission: string;
}