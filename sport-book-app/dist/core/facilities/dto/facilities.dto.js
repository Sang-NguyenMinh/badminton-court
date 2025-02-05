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
exports.UpdateFacilityDto = exports.CreateFacilityDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
class CreateFacilityDto {
}
exports.CreateFacilityDto = CreateFacilityDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Address is required' }),
    (0, class_validator_1.IsString)({ message: 'Address must be a string' }),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Hotline must be an array of strings' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Each hotline must be a string' }),
    __metadata("design:type", Array)
], CreateFacilityDto.prototype, "hotline", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Start time is required' }),
    (0, class_validator_1.IsDateString)({}, { message: 'Start time must be a valid date string' }),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'End time is required' }),
    (0, class_validator_1.IsDateString)({}, { message: 'End time must be a valid date string' }),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Working days must be an array' }),
    (0, class_validator_1.IsEnum)(type_1.WEEKDAY, {
        each: true,
        message: 'Each working day must be a valid weekday',
    }),
    __metadata("design:type", Array)
], CreateFacilityDto.prototype, "workingDays", void 0);
class UpdateFacilityDto {
}
exports.UpdateFacilityDto = UpdateFacilityDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'Invalid _id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '_id cannot be empty' }),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateFacilityDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], UpdateFacilityDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Address must be a string' }),
    __metadata("design:type", String)
], UpdateFacilityDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Hotline must be an array of strings' }),
    (0, class_validator_1.IsString)({ each: true, message: 'Each hotline must be a string' }),
    __metadata("design:type", Array)
], UpdateFacilityDto.prototype, "hotline", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFacilityDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFacilityDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Working days must be an array' }),
    (0, class_validator_1.IsEnum)(type_1.WEEKDAY, {
        each: true,
        message: 'Each working day must be a valid weekday',
    }),
    __metadata("design:type", Array)
], UpdateFacilityDto.prototype, "workingDays", void 0);
//# sourceMappingURL=facilities.dto.js.map