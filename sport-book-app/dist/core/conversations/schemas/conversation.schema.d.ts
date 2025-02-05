import { Document, Schema as MongooseSchema, Types } from 'mongoose';
export declare class Conversation extends Document {
    participants: MongooseSchema.Types.ObjectId[];
    isGroup: boolean;
    groupName?: string;
    groupAdmin?: MongooseSchema.Types.ObjectId;
    lastMessage?: MongooseSchema.Types.ObjectId;
    groupAvatar?: string;
    isActive: boolean;
}
export declare const ConversationSchema: MongooseSchema<Conversation, import("mongoose").Model<Conversation, any, any, any, Document<unknown, any, Conversation> & Conversation & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Conversation, Document<unknown, {}, import("mongoose").FlatRecord<Conversation>> & import("mongoose").FlatRecord<Conversation> & {
    _id: Types.ObjectId;
}>;
