import { GroupsService } from './groups.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/group.schema").Group> & import("./schemas/group.schema").Group & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createGroupDto: CreateGroupDto): Promise<import("./schemas/group.schema").Group>;
    findOne(id: string): Promise<import("./schemas/group.schema").Group>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<import("./schemas/group.schema").Group>;
    remove(id: string): Promise<void>;
}
