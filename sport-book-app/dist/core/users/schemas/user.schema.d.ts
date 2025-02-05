import { ACCOUNT_TYPE, ROLES } from 'src/config/type';
import { Document, Schema as MongooseSchema, HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
export declare class User extends Document {
    displayName?: string;
    username?: string;
    password: string;
    email?: string;
    phone?: string;
    address?: string;
    avatar?: string;
    backgroundImage?: string;
    role?: ROLES;
    lastSeen: Date;
    isOnline: boolean;
    accountType?: ACCOUNT_TYPE;
    isActive?: boolean;
    pushToken?: string;
    codeId?: string;
    codeExpired?: Date;
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;
