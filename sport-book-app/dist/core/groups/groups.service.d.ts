import { Group } from './schemas/group.schema';
import { Model } from 'mongoose';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';
export declare class GroupsService {
    private readonly groupModel;
    constructor(groupModel: Model<Group>);
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Group> & Group & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Group>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<Group>;
    remove(id: string): Promise<void>;
}
