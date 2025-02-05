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
exports.UpdateReservationDto = exports.CreateReservationDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreateReservationDto {
}
exports.CreateReservationDto = CreateReservationDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid userId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'userId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateReservationDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_STATUS, { message: 'Invalid payment status' }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Total amount must be a number' }),
    __metadata("design:type", Number)
], CreateReservationDto.prototype, "totalAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_METHOD, { message: 'Invalid payment method' }),
    __metadata("design:type", String)
], CreateReservationDto.prototype, "paymentMethod", void 0);
class UpdateReservationDto {
}
exports.UpdateReservationDto = UpdateReservationDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReservationDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_STATUS, { message: 'Invalid payment status' }),
    __metadata("design:type", String)
], UpdateReservationDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Total amount must be a number' }),
    __metadata("design:type", Number)
], UpdateReservationDto.prototype, "totalAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_METHOD, { message: 'Invalid payment method' }),
    __metadata("design:type", String)
], UpdateReservationDto.prototype, "paymentMethod", void 0);
//# sourceMappingURL=reservation.dto.js.map