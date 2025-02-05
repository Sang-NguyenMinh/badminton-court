import { Model } from 'mongoose';
import { Message } from './schemas/messages.scheme';
import { Conversation } from '../conversations/schemas/conversation.schema';
import { CreateMessageDto } from './dto/messages.dto';
export declare class MessagesService {
    private messageModel;
    private conversationModel;
    constructor(messageModel: Model<Message>, conversationModel: Model<Conversation>);
    createMessage(senderId: string, conversationId: string, content: string, messageType: string): Promise<Message>;
    getMessageById(messageId: string): Promise<any>;
    getMessages(conversationId: string): Promise<Message[]>;
    addMessage(createMessageDto: CreateMessageDto): Promise<Message>;
}
