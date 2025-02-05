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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const messages_scheme_1 = require("./schemas/messages.scheme");
const conversation_schema_1 = require("../conversations/schemas/conversation.schema");
let MessagesService = class MessagesService {
    constructor(messageModel, conversationModel) {
        this.messageModel = messageModel;
        this.conversationModel = conversationModel;
    }
    async createMessage(senderId, conversationId, content, messageType) {
        const newMessage = new this.messageModel({
            sender: senderId,
            conversation: conversationId,
            content,
            messageType,
        });
        return newMessage.save();
    }
    async getMessageById(messageId) {
        const message = await this.messageModel
            .findById(messageId)
            .select('_id sender conversation content messageType createdAt')
            .exec();
        if (!message) {
            return null;
        }
        return message;
    }
    async getMessages(conversationId) {
        const messages = await this.messageModel
            .find({ conversation: conversationId })
            .populate({
            path: 'sender',
            select: '_id displayName avatar',
        })
            .sort({ createdAt: -1 })
            .exec();
        return messages;
    }
    async addMessage(createMessageDto) {
        try {
            const { senderId, conversationId, content, messageType, fileUrl } = createMessageDto;
            const newMessage = await new this.messageModel({
                sender: senderId,
                conversation: conversationId,
                content,
                messageType,
                fileUrl,
                read: false,
                readBy: [senderId],
            });
            const savedMessage = await newMessage.save();
            console.log(savedMessage);
            const a = await this.conversationModel.findByIdAndUpdate(conversationId, {
                lastMessage: savedMessage._id,
                $set: { updatedAt: new Date() },
            });
            await savedMessage.populate('sender', '_id displayName avatar');
            return savedMessage;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messages_scheme_1.Message.name)),
    __param(1, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], MessagesService);
//# sourceMappingURL=messages.service.js.map