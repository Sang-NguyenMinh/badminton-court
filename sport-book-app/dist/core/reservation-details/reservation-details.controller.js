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
exports.ReservationDetailsController = void 0;
const common_1 = require("@nestjs/common");
const reservation_details_service_1 = require("./reservation-details.service");
const reservation_detail_dto_1 = require("./dto/reservation-detail.dto");
let ReservationDetailsController = class ReservationDetailsController {
    constructor(reservationDetailsService) {
        this.reservationDetailsService = reservationDetailsService;
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        return this.reservationDetailsService.findAll(query, current, pageSize);
    }
    async create(createReservationDetailDto) {
        return this.reservationDetailsService.create(createReservationDetailDto);
    }
    async findOne(id) {
        return this.reservationDetailsService.findOne(id);
    }
    async update(id, updateReservationDetailDto) {
        return this.reservationDetailsService.update(id, updateReservationDetailDto);
    }
    async remove(id) {
        return this.reservationDetailsService.remove(id);
    }
};
exports.ReservationDetailsController = ReservationDetailsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('current')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ReservationDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservation_detail_dto_1.CreateReservationDetailDto]),
    __metadata("design:returntype", Promise)
], ReservationDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationDetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reservation_detail_dto_1.UpdateReservationDetailDto]),
    __metadata("design:returntype", Promise)
], ReservationDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationDetailsController.prototype, "remove", null);
exports.ReservationDetailsController = ReservationDetailsController = __decorate([
    (0, common_1.Controller)('reservation-details'),
    __metadata("design:paramtypes", [reservation_details_service_1.ReservationDetailsService])
], ReservationDetailsController);
//# sourceMappingURL=reservation-details.controller.js.map