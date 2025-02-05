import mongoose from 'mongoose';
import { FRIENDSHIP_STATUS } from 'src/config/type';
export declare class CreateFriendshipDto {
    userId1: mongoose.Schema.Types.ObjectId;
    userId2: mongoose.Schema.Types.ObjectId;
    status: FRIENDSHIP_STATUS;
}
export declare class UpdateFriendshipDto {
    _id: mongoose.Schema.Types.ObjectId;
    userId1?: mongoose.Schema.Types.ObjectId;
    userId2?: mongoose.Schema.Types.ObjectId;
    status?: FRIENDSHIP_STATUS;
}
