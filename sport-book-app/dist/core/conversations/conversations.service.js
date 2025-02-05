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
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const conversation_schema_1 = require("./schemas/conversation.schema");
let ConversationsService = class ConversationsService {
    constructor(conversationModel) {
        this.conversationModel = conversationModel;
    }
    async createConversation(data) {
        const newConversation = new this.conversationModel(data);
        return newConversation.save();
    }
    async getConversationById(user) {
        const b = this.conversationModel
            .findById(user)
            .populate('participants')
            .exec();
        return b;
    }
    async updateLastMessage(conversationId, messageId) {
        await this.conversationModel.findByIdAndUpdate(conversationId, {
            lastMessage: messageId,
        });
    }
    async getConversationByUserId(id) {
        const objectId = new mongoose_2.Types.ObjectId(id);
        const conversations = await this.conversationModel
            .find({
            participants: objectId,
        })
            .populate({
            path: 'participants',
            select: 'avatar displayName isOnline',
        })
            .populate({
            path: 'lastMessage',
            select: 'content messageType',
        })
            .lean()
            .exec();
        return conversations.map((conv) => ({
            conversationId: conv._id.toString(),
            isGroup: conv.isGroup,
            name: conv.groupName || null,
            lastMessage: conv.lastMessage
                ? {
                    content: conv.lastMessage['content'],
                    messageType: conv.lastMessage['messageType'],
                }
                : null,
            participants: conv.participants.map((participant) => ({
                avatar: participant['avatar'],
                displayName: participant['displayName'],
                isOnline: participant['isOnline'],
            })),
        }));
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map