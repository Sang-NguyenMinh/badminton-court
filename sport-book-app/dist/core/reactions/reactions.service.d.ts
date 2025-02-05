import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
import { Reaction } from './schemas/reaction.schema';
import { Model } from 'mongoose';
export declare class ReactionsService {
    private readonly reactionModel;
    constructor(reactionModel: Model<Reaction>);
    create(createReactionDto: CreateReactionDto): Promise<Reaction>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Reaction> & Reaction & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Reaction>;
    update(id: string, updateReactionDto: UpdateReactionDto): Promise<Reaction>;
    remove(id: string): Promise<void>;
}
