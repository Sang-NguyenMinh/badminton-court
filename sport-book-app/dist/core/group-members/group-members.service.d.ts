import { GroupMember } from './schemas/group-member.schema';
import { Model } from 'mongoose';
import { CreateGroupMemberDto, UpdateGroupMemberDto } from './dto/group-meber.dto';
export declare class GroupMembersService {
    private readonly groupMemberModel;
    constructor(groupMemberModel: Model<GroupMember>);
    create(createGroupMemberDto: CreateGroupMemberDto): Promise<GroupMember>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, GroupMember> & GroupMember & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<GroupMember>;
    update(id: string, updateGroupMemberDto: UpdateGroupMemberDto): Promise<GroupMember>;
    remove(id: string): Promise<void>;
}
