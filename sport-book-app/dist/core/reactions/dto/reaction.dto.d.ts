import mongoose from 'mongoose';
export declare class CreateReactionDto {
    userId: mongoose.Schema.Types.ObjectId;
    postId: mongoose.Schema.Types.ObjectId;
    type: string;
}
export declare class UpdateReactionDto {
    _id: mongoose.Schema.Types.ObjectId;
    userId?: mongoose.Schema.Types.ObjectId;
    postId?: mongoose.Schema.Types.ObjectId;
    type?: string;
}
