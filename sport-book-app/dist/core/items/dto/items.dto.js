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
exports.UpdateItemDto = exports.CreateItemDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreateItemDto {
}
exports.CreateItemDto = CreateItemDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid facilityId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'facilityId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateItemDto.prototype, "facilityId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'name cannot be empty' }),
    __metadata("design:type", String)
], CreateItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'price must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'price cannot be empty' }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'amount must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'amount cannot be empty' }),
    __metadata("design:type", Number)
], CreateItemDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(type_1.ITEM_STATUS, { message: 'Invalid item status' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'status cannot be empty' }),
    __metadata("design:type", String)
], CreateItemDto.prototype, "status", void 0);
class UpdateItemDto {
}
exports.UpdateItemDto = UpdateItemDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateItemDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid facilityId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateItemDto.prototype, "facilityId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    __metadata("design:type", String)
], UpdateItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'price must be a number' }),
    __metadata("design:type", Number)
], UpdateItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'amount must be a number' }),
    __metadata("design:type", Number)
], UpdateItemDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.ITEM_STATUS, { message: 'Invalid item status' }),
    __metadata("design:type", String)
], UpdateItemDto.prototype, "status", void 0);
//# sourceMappingURL=items.dto.js.map