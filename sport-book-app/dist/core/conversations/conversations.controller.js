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
exports.ConversationsController = void 0;
const common_1 = require("@nestjs/common");
const customize_1 = require("../../decorators/customize");
const conversations_service_1 = require("./conversations.service");
const messages_service_1 = require("../messages/messages.service");
const messages_dto_1 = require("../messages/dto/messages.dto");
let ConversationsController = class ConversationsController {
    constructor(conversationsService, messagesService) {
        this.conversationsService = conversationsService;
        this.messagesService = messagesService;
    }
    async getConversations(user) {
        return this.conversationsService.getConversationByUserId(user._id);
    }
    async getMessages(conversationId) {
        const messages = await this.messagesService.getMessages(conversationId);
        return messages;
    }
    async addMessageToConversation(createMessageDto, user) {
        const data = await this.messagesService.addMessage(createMessageDto);
        return data;
    }
};
exports.ConversationsController = ConversationsController;
__decorate([
    (0, customize_1.Roles)('Admin', 'Owner', 'User'),
    (0, common_1.Get)(),
    __param(0, (0, customize_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "getConversations", null);
__decorate([
    (0, customize_1.Roles)('Admin', 'Owner', 'User'),
    (0, common_1.Get)(':conversationId/messages'),
    __param(0, (0, common_1.Param)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "getMessages", null);
__decorate([
    (0, customize_1.Roles)('Admin', 'Owner', 'User'),
    (0, common_1.Post)('/messages'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messages_dto_1.CreateMessageDto, Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "addMessageToConversation", null);
exports.ConversationsController = ConversationsController = __decorate([
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [conversations_service_1.ConversationsService,
        messages_service_1.MessagesService])
], ConversationsController);
//# sourceMappingURL=conversations.controller.js.map