"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const conversations_service_1 = require("../core/conversations/conversations.service");
const messages_service_1 = require("../core/messages/messages.service");
const users_service_1 = require("../core/users/users.service");
const notification_service_1 = require("../notification/notification.service");
let ChatGateway = class ChatGateway {
    constructor(conversationService, notificationService, messageService, userService) {
        this.conversationService = conversationService;
        this.notificationService = notificationService;
        this.messageService = messageService;
        this.userService = userService;
        this.activeSockets = {};
    }
    async handleJoin(client, data) {
        const { userId, conversationId } = data;
        console.log(`User ${userId} with socket ID ${client.id} joined conversation ${conversationId}`);
        this.activeSockets[userId] = client.id;
        await this.userService.updateUserStatus(userId, true);
        client.join(conversationId);
        this.server.emit('userOnline', userId);
    }
    async handleLeave(client, data) {
        const { userId, conversationId } = data;
        console.log(`User ${userId} with socket ID ${client.id} left conversation ${conversationId}`);
        await this.userService.updateUserStatus(userId, false);
        client.leave(conversationId);
        delete this.activeSockets[userId];
        this.server.emit('userOffline', userId);
    }
    async handleMessage(data) {
        const { _id, senderId, conversationId } = data;
        const message = await this.messageService.getMessageById(_id);
        const conversation = await this.conversationService.getConversationById(conversationId);
        console.log('Active sockets:', this.activeSockets);
        console.log(conversation.participants);
        const notificationPromises = conversation.participants.map(async (participantId) => {
            if (senderId === participantId._id.toString())
                return;
            const socketId = this.activeSockets[participantId?._id.toString()];
            if (socketId) {
                console.log(`Emitting newMessage to socket ID ${socketId} for user ${participantId}`);
                this.server
                    .to(socketId)
                    .emit('newMessage', { message, conversationId });
            }
            else {
                console.warn(`No active socket found for user ID: ${participantId}`);
            }
            try {
                const user = await this.userService.findOne(participantId._id);
                if (user && user.pushToken) {
                    await this.notificationService.sendBatchPushNotifications([
                        {
                            pushToken: user.pushToken,
                            message: `Bạn có tin nhắn mới `,
                            data: {
                                messageId: message._id,
                                conversationId: conversationId,
                                senderId: senderId,
                            },
                        },
                    ]);
                    console.log(`Push notification sent successfully to user ${user._id}`);
                }
                else {
                    console.warn(`No push token found for user ${user?._id}`);
                }
            }
            catch (error) {
                console.error(`Failed to send push notification to user ${participantId._id}`, error);
            }
        });
        await Promise.all(notificationPromises);
        await this.conversationService.updateLastMessage(conversationId, message._id);
    }
    async handleCreateConversation(data) {
        const conversation = await this.conversationService.createConversation(data);
        conversation.participants.forEach((participantId) => {
            const socketId = this.activeSockets[participantId.toString()];
            if (socketId) {
                this.server.to(socketId).emit('newConversation', conversation);
            }
        });
    }
    handleTyping(data) {
        this.server.to(data.conversationId).emit('userTyping', data.userId);
    }
    handleStopTyping(data) {
        this.server.to(data.conversationId).emit('userStopTyping', data.userId);
    }
    handleDisconnect(client) {
        const userId = Object.keys(this.activeSockets).find((id) => this.activeSockets[id] === client.id);
        if (userId) {
            delete this.activeSockets[userId];
            console.log(`User ${userId} disconnected and removed from activeSockets.`);
        }
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleLeave", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('createConversation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleCreateConversation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('stopTyping'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleStopTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('disconnect'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleDisconnect", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
        namespace: '/socket',
    }),
    __metadata("design:paramtypes", [conversations_service_1.ConversationsService,
        notification_service_1.NotificationService,
        messages_service_1.MessagesService,
        users_service_1.UsersService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map