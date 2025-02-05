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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAvailabilityDto = exports.CourtAvailabilityDto = exports.UpdateCourtDto = exports.CreateCourtDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCourtDto {
}
exports.CreateCourtDto = CreateCourtDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Facility ID is required' }),
    __metadata("design:type", String)
], CreateCourtDto.prototype, "facilityID", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateCourtDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Price per hour is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price per hour must be a number' }),
    __metadata("design:type", Number)
], CreateCourtDto.prototype, "pricePerHour", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateCourtDto.prototype, "status", void 0);
class UpdateCourtDto {
}
exports.UpdateCourtDto = UpdateCourtDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], UpdateCourtDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Price per hour must be a number' }),
    __metadata("design:type", Number)
], UpdateCourtDto.prototype, "pricePerHour", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateCourtDto.prototype, "status", void 0);
class CourtAvailabilityDto {
}
exports.CourtAvailabilityDto = CourtAvailabilityDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CourtAvailabilityDto.prototype, "facilityId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CourtAvailabilityDto.prototype, "date", void 0);
class CheckAvailabilityDto {
}
exports.CheckAvailabilityDto = CheckAvailabilityDto;
//# sourceMappingURL=courts.dto.js.map