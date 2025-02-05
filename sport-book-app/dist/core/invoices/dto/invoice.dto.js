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
exports.UpdateInvoiceDto = exports.CreateInvoiceDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreateInvoiceDto {
}
exports.CreateInvoiceDto = CreateInvoiceDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid reservationId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'reservationId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateInvoiceDto.prototype, "reservationId", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'invoiceDate must be a valid date' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'invoiceDate cannot be empty' }),
    __metadata("design:type", Date)
], CreateInvoiceDto.prototype, "invoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_STATUS, { message: 'Invalid payment status' }),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_METHOD, { message: 'Invalid payment method' }),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'totalAmount must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'totalAmount cannot be empty' }),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalAmount", void 0);
class UpdateInvoiceDto {
}
exports.UpdateInvoiceDto = UpdateInvoiceDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateInvoiceDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid reservationId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateInvoiceDto.prototype, "reservationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: 'invoiceDate must be a valid date' }),
    __metadata("design:type", Date)
], UpdateInvoiceDto.prototype, "invoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_STATUS, { message: 'Invalid payment status' }),
    __metadata("design:type", String)
], UpdateInvoiceDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(type_1.PAYMENT_METHOD, { message: 'Invalid payment method' }),
    __metadata("design:type", String)
], UpdateInvoiceDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'totalAmount must be a number' }),
    __metadata("design:type", Number)
], UpdateInvoiceDto.prototype, "totalAmount", void 0);
//# sourceMappingURL=invoice.dto.js.map