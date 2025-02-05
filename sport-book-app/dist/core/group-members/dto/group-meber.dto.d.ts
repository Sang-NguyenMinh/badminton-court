import mongoose from 'mongoose';
import { GROUP_ROLE } from 'src/config/type';
export declare class CreateGroupMemberDto {
    userId: mongoose.Schema.Types.ObjectId;
    groupId: mongoose.Schema.Types.ObjectId;
    role: GROUP_ROLE;
}
export declare class UpdateGroupMemberDto {
    _id: mongoose.Schema.Types.ObjectId;
    userId?: mongoose.Schema.Types.ObjectId;
    groupId?: mongoose.Schema.Types.ObjectId;
    role?: GROUP_ROLE;
}
