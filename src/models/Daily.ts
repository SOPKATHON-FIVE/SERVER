import mongoose from "mongoose";
import { DailyInfo } from "../interfaces/daily/DailyInfo";

const DailySchema = new mongoose.Schema({
    dailyName: {
        type: String,
        required: true,

    },
    userId: {
        type: Number,
        required: true,
    },
    missions: [
        {
            mission: {
                type: String,
                required: true
            }
        }
    ]
});

export default mongoose.model<DailyInfo & mongoose.Document>("Daily", DailySchema);