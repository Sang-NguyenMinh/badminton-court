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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const post_schema_1 = require("./schemas/post.schema");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
const group_schema_1 = require("../groups/schemas/group.schema");
let PostsService = class PostsService {
    constructor(postModel, userModel, groupModel) {
        this.postModel = postModel;
        this.userModel = userModel;
        this.groupModel = groupModel;
    }
    async create(createPostDto) {
        const newPost = new this.postModel(createPostDto);
        newPost.save();
        return {
            message: 'Thành công',
            postId: newPost._id,
        };
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        const totalItems = await this.postModel.countDocuments(filter).exec();
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.postModel
            .find(filter)
            .populate('owner', 'avatar displayName')
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
        const post = await this.postModel.findById(id).exec();
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
    async update(id, updatePostDto) {
        const updatedPost = await this.postModel
            .findByIdAndUpdate(id, updatePostDto, { new: true })
            .exec();
        if (!updatedPost) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return updatedPost;
    }
    async remove(id) {
        const result = await this.postModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_2.InjectModel)(group_schema_1.Group.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], PostsService);
//# sourceMappingURL=posts.service.js.map