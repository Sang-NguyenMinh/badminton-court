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
exports.GroupMembersController = void 0;
const common_1 = require("@nestjs/common");
const group_members_service_1 = require("./group-members.service");
const group_meber_dto_1 = require("./dto/group-meber.dto");
let GroupMembersController = class GroupMembersController {
    constructor(groupMembersService) {
        this.groupMembersService = groupMembersService;
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        return this.groupMembersService.findAll(query, current, pageSize);
    }
    async create(createGroupMemberDto) {
        return this.groupMembersService.create(createGroupMemberDto);
    }
    async findOne(id) {
        return this.groupMembersService.findOne(id);
    }
    async update(id, updateGroupMemberDto) {
        return this.groupMembersService.update(id, updateGroupMemberDto);
    }
    async remove(id) {
        return this.groupMembersService.remove(id);
    }
};
exports.GroupMembersController = GroupMembersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('current')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], GroupMembersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [group_meber_dto_1.CreateGroupMemberDto]),
    __metadata("design:returntype", Promise)
], GroupMembersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, group_meber_dto_1.UpdateGroupMemberDto]),
    __metadata("design:returntype", Promise)
], GroupMembersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembersController.prototype, "remove", null);
exports.GroupMembersController = GroupMembersController = __decorate([
    (0, common_1.Controller)('group-members'),
    __metadata("design:paramtypes", [group_members_service_1.GroupMembersService])
], GroupMembersController);
//# sourceMappingURL=group-members.controller.js.map