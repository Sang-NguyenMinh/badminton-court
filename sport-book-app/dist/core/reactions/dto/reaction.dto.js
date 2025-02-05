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
exports.UpdateReactionDto = exports.CreateReactionDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
class CreateReactionDto {
}
exports.CreateReactionDto = CreateReactionDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateReactionDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid postId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'postId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateReactionDto.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'type must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'type cannot be empty' }),
    __metadata("design:type", String)
], CreateReactionDto.prototype, "type", void 0);
class UpdateReactionDto {
}
exports.UpdateReactionDto = UpdateReactionDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReactionDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReactionDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid postId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReactionDto.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'type must be a string' }),
    __metadata("design:type", String)
], UpdateReactionDto.prototype, "type", void 0);
//# sourceMappingURL=reaction.dto.js.map