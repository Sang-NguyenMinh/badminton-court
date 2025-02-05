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
exports.FriendshipsController = void 0;
const common_1 = require("@nestjs/common");
const friendships_service_1 = require("./friendships.service");
const friendship_dto_1 = require("./dto/friendship.dto");
let FriendshipsController = class FriendshipsController {
    constructor(friendshipsService) {
        this.friendshipsService = friendshipsService;
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        return this.friendshipsService.findAll(query, current, pageSize);
    }
    async create(createFriendshipDto) {
        return this.friendshipsService.create(createFriendshipDto);
    }
    async findOne(id) {
        return this.friendshipsService.findOne(id);
    }
    async update(id, updateFriendshipDto) {
        return this.friendshipsService.update(id, updateFriendshipDto);
    }
    async remove(id) {
        return this.friendshipsService.remove(id);
    }
};
exports.FriendshipsController = FriendshipsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('current')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], FriendshipsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [friendship_dto_1.CreateFriendshipDto]),
    __metadata("design:returntype", Promise)
], FriendshipsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FriendshipsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, friendship_dto_1.UpdateFriendshipDto]),
    __metadata("design:returntype", Promise)
], FriendshipsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FriendshipsController.prototype, "remove", null);
exports.FriendshipsController = FriendshipsController = __decorate([
    (0, common_1.Controller)('friendships'),
    __metadata("design:paramtypes", [friendships_service_1.FriendshipsService])
], FriendshipsController);
//# sourceMappingURL=friendships.controller.js.map