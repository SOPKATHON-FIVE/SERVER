import mongoose from "mongoose";
//import { MissionInfo } from "./DailyInfo";

export interface DailyResponseDto {
    dailyName: string;
    description: string;
    userId: number;
    userName: string;
    missions: string[];
}


