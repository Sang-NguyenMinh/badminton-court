import mongoose, { HydratedDocument } from 'mongoose';
import { FRIENDSHIP_STATUS } from 'src/config/type';
export type FriendshipDocument = HydratedDocument<Friendship>;
export declare class Friendship {
    userId1: mongoose.Schema.Types.ObjectId;
    userId2: mongoose.Schema.Types.ObjectId;
    status: FRIENDSHIP_STATUS;
}
export declare const FriendshipSchema: mongoose.Schema<Friendship, mongoose.Model<Friendship, any, any, any, mongoose.Document<unknown, any, Friendship> & Friendship & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Friendship, mongoose.Document<unknown, {}, mongoose.FlatRecord<Friendship>> & mongoose.FlatRecord<Friendship> & {
    _id: mongoose.Types.ObjectId;
}>;
