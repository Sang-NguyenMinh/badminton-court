"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationDetailDto = exports.CreateReservationDetailDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importStar(require("mongoose"));
class CreateReservationDetailDto {
}
exports.CreateReservationDetailDto = CreateReservationDetailDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid reservationID' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'reservationID cannot be empty' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateReservationDetailDto.prototype, "reservationID", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid courtId' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'courtId cannot be empty' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateReservationDetailDto.prototype, "courtId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateReservationDetailDto.prototype, "reservationDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReservationDetailDto.prototype, "price", void 0);
class UpdateReservationDetailDto {
}
exports.UpdateReservationDetailDto = UpdateReservationDetailDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReservationDetailDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid reservationID' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReservationDetailDto.prototype, "reservationID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)({ message: 'Invalid courtId' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateReservationDetailDto.prototype, "courtId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: 'startTime must be a valid date' }),
    __metadata("design:type", Date)
], UpdateReservationDetailDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: 'endTime must be a valid date' }),
    __metadata("design:type", Date)
], UpdateReservationDetailDto.prototype, "endTime", void 0);
//# sourceMappingURL=reservation-detail.dto.js.map