import { FriendshipsService } from './friendships.service';
import { CreateFriendshipDto, UpdateFriendshipDto } from './dto/friendship.dto';
export declare class FriendshipsController {
    private readonly friendshipsService;
    constructor(friendshipsService: FriendshipsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/friendship.schema").Friendship> & import("./schemas/friendship.schema").Friendship & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createFriendshipDto: CreateFriendshipDto): Promise<import("./schemas/friendship.schema").Friendship>;
    findOne(id: string): Promise<import("./schemas/friendship.schema").Friendship>;
    update(id: string, updateFriendshipDto: UpdateFriendshipDto): Promise<import("./schemas/friendship.schema").Friendship>;
    remove(id: string): Promise<void>;
}
