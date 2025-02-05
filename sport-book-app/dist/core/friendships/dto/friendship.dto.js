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
exports.UpdateFriendshipDto = exports.CreateFriendshipDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreateFriendshipDto {
}
exports.CreateFriendshipDto = CreateFriendshipDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId1' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId1 cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateFriendshipDto.prototype, "userId1", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId2' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId2 cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateFriendshipDto.prototype, "userId2", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(type_1.FRIENDSHIP_STATUS, { message: 'Invalid status' }),
    __metadata("design:type", String)
], CreateFriendshipDto.prototype, "status", void 0);
class UpdateFriendshipDto {
}
exports.UpdateFriendshipDto = UpdateFriendshipDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateFriendshipDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId1' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateFriendshipDto.prototype, "userId1", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId2' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateFriendshipDto.prototype, "userId2", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.FRIENDSHIP_STATUS, { message: 'Invalid status' }),
    __metadata("design:type", String)
], UpdateFriendshipDto.prototype, "status", void 0);
//# sourceMappingURL=friendship.dto.js.map