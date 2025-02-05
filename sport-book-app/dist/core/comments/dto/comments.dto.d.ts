import mongoose from 'mongoose';
export declare class CreateCommentDto {
    userId: string;
    postId: string;
    content: string;
    images?: string[];
}
export declare class UpdateCommentDto {
    _id: mongoose.Schema.Types.ObjectId;
    content?: string;
    images?: string[];
}
