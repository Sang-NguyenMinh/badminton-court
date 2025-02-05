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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostDto = exports.CreatePostDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreatePostDto.prototype, "owner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid groupId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreatePostDto.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'content must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'content cannot be empty' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'images must be an array of strings' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'images array cannot be empty' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Each image must be a string' }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'isLockComment must be a boolean' }),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "isLockComment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.POST_STATUS, { message: 'Invalid post status' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "status", void 0);
class UpdatePostDto {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdatePostDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid ownerId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdatePostDto.prototype, "owner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid groupId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdatePostDto.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'content must be a string' }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'images must be an array of strings' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Each image must be a string' }),
    __metadata("design:type", Array)
], UpdatePostDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'isLockComment must be a boolean' }),
    __metadata("design:type", Boolean)
], UpdatePostDto.prototype, "isLockComment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.POST_STATUS, { message: 'Invalid post status' }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "status", void 0);
//# sourceMappingURL=posts.dto.js.map