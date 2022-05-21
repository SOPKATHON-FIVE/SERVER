import mongoose from "mongoose";

export interface UserMissionInfo {
    userId: number;
    dailyId: mongoose.Types.ObjectId,
    completeMissions: MissionCheckedInfo[];
}

export interface MissionCheckedInfo {
    mission: string;
    check: boolean;
}