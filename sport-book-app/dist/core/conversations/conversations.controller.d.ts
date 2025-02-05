import { ConversationsService } from './conversations.service';
import { Message } from '../messages/schemas/messages.scheme';
import { MessagesService } from '../messages/messages.service';
import { CreateMessageDto } from '../messages/dto/messages.dto';
export declare class ConversationsController {
    private conversationsService;
    private messagesService;
    constructor(conversationsService: ConversationsService, messagesService: MessagesService);
    getConversations(user: any): Promise<any[]>;
    getMessages(conversationId: string): Promise<Message[]>;
    addMessageToConversation(createMessageDto: CreateMessageDto, user: any): Promise<any>;
}
