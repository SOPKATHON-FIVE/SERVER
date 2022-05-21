import mongoose from 'mongoose';
import { UserMissionInfo } from '../interfaces/userMission/UserMissionInfo';

const UserMissionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
  },
  dailyId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Daily',
  },
  completeMissions: [
    {
      mission: {
        type: String,
      },
    },
  ],
});

export default mongoose.model<UserMissionInfo & mongoose.Document>('UserMission', UserMissionSchema);
