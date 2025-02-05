import mongoose, { HydratedDocument } from 'mongoose';
import { GROUP_ROLE } from 'src/config/type';
export type GroupMemberDocument = HydratedDocument<GroupMember>;
export declare class GroupMember {
    userId: mongoose.Schema.Types.ObjectId;
    GroupId: mongoose.Schema.Types.ObjectId;
    role: GROUP_ROLE;
}
export declare const GroupMemberSchema: mongoose.Schema<GroupMember, mongoose.Model<GroupMember, any, any, any, mongoose.Document<unknown, any, GroupMember> & GroupMember & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, GroupMember, mongoose.Document<unknown, {}, mongoose.FlatRecord<GroupMember>> & mongoose.FlatRecord<GroupMember> & {
    _id: mongoose.Types.ObjectId;
}>;
