import mongoose, { HydratedDocument } from 'mongoose';
export type ReactionDocument = HydratedDocument<Reaction>;
export declare class Reaction {
    userId: mongoose.Schema.Types.ObjectId;
    postId: mongoose.Schema.Types.ObjectId;
    type: string;
}
export declare const ReactionSchema: mongoose.Schema<Reaction, mongoose.Model<Reaction, any, any, any, mongoose.Document<unknown, any, Reaction> & Reaction & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Reaction, mongoose.Document<unknown, {}, mongoose.FlatRecord<Reaction>> & mongoose.FlatRecord<Reaction> & {
    _id: mongoose.Types.ObjectId;
}>;
