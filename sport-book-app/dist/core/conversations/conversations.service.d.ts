import { Model } from 'mongoose';
import { Conversation } from './schemas/conversation.schema';
export declare class ConversationsService {
    private conversationModel;
    constructor(conversationModel: Model<Conversation>);
    createConversation(data: {
        participants: string[];
        isGroup: boolean;
        groupName?: string;
    }): Promise<Conversation>;
    getConversationById(user: any): Promise<Conversation>;
    updateLastMessage(conversationId: string, messageId: string): Promise<void>;
    getConversationByUserId(id: string): Promise<any[]>;
}
