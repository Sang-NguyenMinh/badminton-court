import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comments.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/comment.schema").Comment> & import("./schemas/comment.schema").Comment & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createCommentDto: CreateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
    findOne(id: string): Promise<import("./schemas/comment.schema").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
    remove(id: string): Promise<void>;
}
