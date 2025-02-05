import { GroupMembersService } from './group-members.service';
import { CreateGroupMemberDto, UpdateGroupMemberDto } from './dto/group-meber.dto';
export declare class GroupMembersController {
    private readonly groupMembersService;
    constructor(groupMembersService: GroupMembersService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/group-member.schema").GroupMember> & import("./schemas/group-member.schema").GroupMember & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createGroupMemberDto: CreateGroupMemberDto): Promise<import("./schemas/group-member.schema").GroupMember>;
    findOne(id: string): Promise<import("./schemas/group-member.schema").GroupMember>;
    update(id: string, updateGroupMemberDto: UpdateGroupMemberDto): Promise<import("./schemas/group-member.schema").GroupMember>;
    remove(id: string): Promise<void>;
}
