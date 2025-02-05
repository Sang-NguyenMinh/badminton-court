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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilitiesController = void 0;
const common_1 = require("@nestjs/common");
const facilities_service_1 = require("./facilities.service");
const customize_1 = require("../../decorators/customize");
const facilities_dto_1 = require("./dto/facilities.dto");
const courts_service_1 = require("../courts/courts.service");
let FacilitiesController = class FacilitiesController {
    constructor(facilitiesService, courtService) {
        this.facilitiesService = facilitiesService;
        this.courtService = courtService;
    }
    async create(createFacilityDto) {
        return this.facilitiesService.create(createFacilityDto);
    }
    async getFacilityByPhone(phone) {
        return this.facilitiesService.getFacilityByPhone(phone.toString());
    }
    async findAll(query, current, pageSize, keyword) {
        return this.facilitiesService.findAll(query, +current, +pageSize, keyword);
    }
    async findOne(id) {
        return this.facilitiesService.findOne(id);
    }
    async update(updateFacilityDto) {
        return this.facilitiesService.update(updateFacilityDto);
    }
    async remove(id) {
        return this.facilitiesService.remove(id);
    }
    async getWorkingHours(id) {
        return this.facilitiesService.getWorkingHours(id);
    }
    async getCourts(facilityId) {
        const courts = await this.courtService.getCourtsByFacilityId(facilityId);
        return { courts };
    }
};
exports.FacilitiesController = FacilitiesController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facilities_dto_1.CreateFacilityDto]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "create", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)('by-phone'),
    __param(0, (0, common_1.Query)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "getFacilityByPhone", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('current')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "findAll", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "findOne", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facilities_dto_1.UpdateFacilityDto]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "update", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "remove", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(':id/working-hours'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "getWorkingHours", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(':facilityId/courts'),
    __param(0, (0, common_1.Param)('facilityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacilitiesController.prototype, "getCourts", null);
exports.FacilitiesController = FacilitiesController = __decorate([
    (0, common_1.Controller)('facilities'),
    __metadata("design:paramtypes", [facilities_service_1.FacilitiesService,
        courts_service_1.CourtsService])
], FacilitiesController);
//# sourceMappingURL=facilities.controller.js.map