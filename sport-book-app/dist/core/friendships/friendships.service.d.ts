import { Friendship } from './schemas/friendship.schema';
import { Model } from 'mongoose';
import { CreateFriendshipDto, UpdateFriendshipDto } from './dto/friendship.dto';
export declare class FriendshipsService {
    private readonly friendshipModel;
    constructor(friendshipModel: Model<Friendship>);
    create(createFriendshipDto: CreateFriendshipDto): Promise<Friendship>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Friendship> & Friendship & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Friendship>;
    update(id: string, updateFriendshipDto: UpdateFriendshipDto): Promise<Friendship>;
    remove(id: string): Promise<void>;
}
