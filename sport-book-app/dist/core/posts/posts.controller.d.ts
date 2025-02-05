import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class PostsController {
    private readonly postsService;
    private readonly cloudinaryService;
    constructor(postsService: PostsService, cloudinaryService: CloudinaryService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: Omit<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    create(user: any, createPostDto: CreatePostDto, files: Express.Multer.File[]): Promise<any>;
    findOne(id: string): Promise<import("./schemas/post.schema").Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("./schemas/post.schema").Post>;
    remove(id: string): Promise<void>;
}
