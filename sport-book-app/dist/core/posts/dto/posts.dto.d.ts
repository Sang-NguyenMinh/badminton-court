import mongoose from 'mongoose';
import { POST_STATUS } from 'src/config/type';
export declare class CreatePostDto {
    owner: mongoose.Schema.Types.ObjectId;
    groupId?: mongoose.Schema.Types.ObjectId;
    content: string;
    images: string[];
    isLockComment?: boolean;
    status?: POST_STATUS;
}
export declare class UpdatePostDto {
    _id: mongoose.Schema.Types.ObjectId;
    owner?: mongoose.Schema.Types.ObjectId;
    groupId?: mongoose.Schema.Types.ObjectId;
    content?: string;
    images?: string[];
    isLockComment?: boolean;
    status?: POST_STATUS;
}
