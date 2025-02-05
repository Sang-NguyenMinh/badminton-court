import { HydratedDocument } from 'mongoose';
import { GROUP_STATUS } from 'src/config/type';
export type GroupDocument = HydratedDocument<Group>;
export declare class Group {
    name: string;
    description: string;
    status: GROUP_STATUS;
}
export declare const GroupSchema: import("mongoose").Schema<Group, import("mongoose").Model<Group, any, any, any, import("mongoose").Document<unknown, any, Group> & Group & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Group, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Group>> & import("mongoose").FlatRecord<Group> & {
    _id: import("mongoose").Types.ObjectId;
}>;
