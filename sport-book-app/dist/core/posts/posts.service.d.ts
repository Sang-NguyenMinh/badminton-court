import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { User } from '../users/schemas/user.schema';
import { Group } from '../groups/schemas/group.schema';
export declare class PostsService {
    private readonly postModel;
    private readonly userModel;
    private readonly groupModel;
    constructor(postModel: Model<Post>, userModel: Model<User>, groupModel: Model<Group>);
    create(createPostDto: CreatePostDto): Promise<any>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: Omit<import("mongoose").Document<unknown, {}, Post> & Post & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    findOne(id: string): Promise<Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: string): Promise<void>;
}
