import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
export declare class ReactionsController {
    private readonly reactionsService;
    constructor(reactionsService: ReactionsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/reaction.schema").Reaction> & import("./schemas/reaction.schema").Reaction & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createReactionDto: CreateReactionDto): Promise<import("./schemas/reaction.schema").Reaction>;
    findOne(id: string): Promise<import("./schemas/reaction.schema").Reaction>;
    update(id: string, updateReactionDto: UpdateReactionDto): Promise<import("./schemas/reaction.schema").Reaction>;
    remove(id: string): Promise<void>;
}
