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
exports.UpdateInvoiceDetailDto = exports.CreateInvoiceDetailDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
class CreateInvoiceDetailDto {
}
exports.CreateInvoiceDetailDto = CreateInvoiceDetailDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid invoiceId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'invoiceId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateInvoiceDetailDto.prototype, "invoiceId", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid itemId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'itemId cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], CreateInvoiceDetailDto.prototype, "itemId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'quantity must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'quantity cannot be empty' }),
    __metadata("design:type", Number)
], CreateInvoiceDetailDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'currentPrice must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'currentPrice cannot be empty' }),
    __metadata("design:type", Number)
], CreateInvoiceDetailDto.prototype, "currentPrice", void 0);
class UpdateInvoiceDetailDto {
}
exports.UpdateInvoiceDetailDto = UpdateInvoiceDetailDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateInvoiceDetailDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid invoiceId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateInvoiceDetailDto.prototype, "invoiceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid itemId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateInvoiceDetailDto.prototype, "itemId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'quantity must be a number' }),
    __metadata("design:type", Number)
], UpdateInvoiceDetailDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'currentPrice must be a number' }),
    __metadata("design:type", Number)
], UpdateInvoiceDetailDto.prototype, "currentPrice", void 0);
//# sourceMappingURL=invoice-detail.dto.js.map