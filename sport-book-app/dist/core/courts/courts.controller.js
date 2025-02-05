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
exports.CourtsController = void 0;
const common_1 = require("@nestjs/common");
const courts_service_1 = require("./courts.service");
const customize_1 = require("../../decorators/customize");
const courts_dto_1 = require("./dto/courts.dto");
let CourtsController = class CourtsController {
    constructor(courtsService) {
        this.courtsService = courtsService;
    }
    async findOne(id) {
        return this.courtsService.findOne(id);
    }
    async update(id, updateCourtDto) {
        return this.courtsService.update(id, updateCourtDto);
    }
    async remove(id) {
        return this.courtsService.remove(id);
    }
    async getCourtAvailability(facilityId, date, startTime, endTime) {
        return this.courtsService.checkCourtAvailability(facilityId, date, startTime, endTime);
    }
};
exports.CourtsController = CourtsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courts_dto_1.UpdateCourtDto]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "remove", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('facilityId')),
    __param(1, (0, common_1.Query)('date')),
    __param(2, (0, common_1.Query)('startTime')),
    __param(3, (0, common_1.Query)('endTime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getCourtAvailability", null);
exports.CourtsController = CourtsController = __decorate([
    (0, common_1.Controller)('courts'),
    __metadata("design:paramtypes", [courts_service_1.CourtsService])
], CourtsController);
//# sourceMappingURL=courts.controller.js.map