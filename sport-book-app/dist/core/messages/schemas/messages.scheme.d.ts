import { Document, Schema as MongooseSchema, HydratedDocument, Types } from 'mongoose';
export type MessageDocument = HydratedDocument<Message>;
export declare class Message extends Document {
    sender: MongooseSchema.Types.ObjectId;
    conversation: MongooseSchema.Types.ObjectId;
    content: string;
    read: boolean;
    readBy: MongooseSchema.Types.ObjectId[];
    messageType: string;
    fileUrl?: string;
}
export declare const MessageSchema: MongooseSchema<Message, import("mongoose").Model<Message, any, any, any, Document<unknown, any, Message> & Message & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Message, Document<unknown, {}, import("mongoose").FlatRecord<Message>> & import("mongoose").FlatRecord<Message> & {
    _id: Types.ObjectId;
}>;
