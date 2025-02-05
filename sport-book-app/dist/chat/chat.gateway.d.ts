import { Server, Socket } from 'socket.io';
import { ConversationsService } from 'src/core/conversations/conversations.service';
import { MessagesService } from 'src/core/messages/messages.service';
import { UsersService } from 'src/core/users/users.service';
import { NotificationService } from 'src/notification/notification.service';
export declare class ChatGateway {
    private conversationService;
    private notificationService;
    private messageService;
    private userService;
    server: Server;
    private activeSockets;
    constructor(conversationService: ConversationsService, notificationService: NotificationService, messageService: MessagesService, userService: UsersService);
    handleJoin(client: Socket, data: {
        userId: string;
        conversationId: string;
    }): Promise<void>;
    handleLeave(client: Socket, data: {
        userId: string;
        conversationId: string;
    }): Promise<void>;
    handleMessage(data: {
        senderId: string;
        conversationId: string;
        content: string;
        messageType: string;
        _id: string;
    }): Promise<void>;
    handleCreateConversation(data: {
        participants: string[];
        isGroup: boolean;
        groupName?: string;
    }): Promise<void>;
    handleTyping(data: {
        userId: string;
        conversationId: string;
    }): void;
    handleStopTyping(data: {
        userId: string;
        conversationId: string;
    }): void;
    handleDisconnect(client: Socket): void;
}
