import mongoose from 'mongoose';
export declare class CreateReactionDto {
    userId: mongoose.Types.ObjectId;
    postID: mongoose.Types.ObjectId;
    reactionType: string;
}
