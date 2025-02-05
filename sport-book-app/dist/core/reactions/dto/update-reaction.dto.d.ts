import { CreateReactionDto } from './create-reaction.dto';
import mongoose from 'mongoose';
declare const UpdateReactionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateReactionDto>>;
export declare class UpdateReactionDto extends UpdateReactionDto_base {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    postID: mongoose.Types.ObjectId;
    reactionType: string;
}
export {};
