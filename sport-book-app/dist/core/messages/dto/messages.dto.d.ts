import mongoose from 'mongoose';
export declare enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    FILE = "file"
}
export declare class CreateMessageDto {
    senderId: mongoose.Schema.Types.ObjectId;
    conversationId: mongoose.Schema.Types.ObjectId;
    content: string;
    messageType: string;
    fileUrl?: string;
}
