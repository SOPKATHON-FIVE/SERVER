import mongoose from 'mongoose';
import { DailyInfo } from '../interfaces/daily/DailyInfo';

const DailySchema = new mongoose.Schema({
    dailyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true,
    },
    userName: {
        type: String
    },
    missions: {
        type: Array
    }
});

export default mongoose.model<DailyInfo & mongoose.Document>('Daily', DailySchema);
