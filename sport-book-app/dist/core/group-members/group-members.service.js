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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMembersService = void 0;
const common_1 = require("@nestjs/common");
const group_member_schema_1 = require("./schemas/group-member.schema");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let GroupMembersService = class GroupMembersService {
    constructor(groupMemberModel) {
        this.groupMemberModel = groupMemberModel;
    }
    async create(createGroupMemberDto) {
        const newGroupMember = new this.groupMemberModel(createGroupMemberDto);
        return newGroupMember.save();
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        const totalItems = await this.groupMemberModel
            .countDocuments(filter)
            .exec();
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.groupMemberModel
            .find(filter)
            .limit(pageSize)
            .skip(skip)
            .sort(sort)
            .exec();
        return {
            meta: {
                current,
                pageSize,
                pages: totalPages,
                total: totalItems,
                previous: hasPrevious,
                next: hasNext,
            },
            results,
        };
    }
    async findOne(id) {
        const groupMember = await this.groupMemberModel.findById(id).exec();
        if (!groupMember) {
            throw new common_1.NotFoundException(`GroupMember with ID ${id} not found`);
        }
        return groupMember;
    }
    async update(id, updateGroupMemberDto) {
        const updatedGroupMember = await this.groupMemberModel
            .findByIdAndUpdate(id, updateGroupMemberDto, { new: true })
            .exec();
        if (!updatedGroupMember) {
            throw new common_1.NotFoundException(`GroupMember with ID ${id} not found`);
        }
        return updatedGroupMember;
    }
    async remove(id) {
        const result = await this.groupMemberModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`GroupMember with ID ${id} not found`);
        }
    }
};
exports.GroupMembersService = GroupMembersService;
exports.GroupMembersService = GroupMembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(group_member_schema_1.GroupMember.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GroupMembersService);
//# sourceMappingURL=group-members.service.js.map