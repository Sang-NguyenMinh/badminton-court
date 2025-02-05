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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const reservations_service_1 = require("./reservations.service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
const update_reservation_dto_1 = require("./dto/update-reservation.dto");
const reservation_details_service_1 = require("../reservation-details/reservation-details.service");
const mongoose_1 = require("mongoose");
const customize_1 = require("../../decorators/customize");
const moment_1 = __importDefault(require("moment"));
let ReservationsController = class ReservationsController {
    constructor(reservationsService, reservationDetailsService) {
        this.reservationsService = reservationsService;
        this.reservationDetailsService = reservationDetailsService;
    }
    async findAll(user, query = '', current = 1, pageSize = 10, keyword = '', status = '') {
        return this.reservationsService.findAll(query, current, pageSize, keyword, user._id, status);
    }
    async create(createReservationDto) {
        console.log(createReservationDto.reservationDate);
        const res = await this.reservationsService.create(createReservationDto);
        const reservationId = res._id;
        const reservationDetailsPromises = createReservationDto.courts.map(async (court) => {
            const courtId = new mongoose_1.Types.ObjectId(court.id);
            await this.reservationDetailsService.create({
                reservationID: reservationId,
                courtId: courtId,
                price: court.price,
                startTime: court.startTime,
                endTime: court.endTime,
                reservationDate: moment_1.default.utc(createReservationDto.reservationDate, 'MM/DD/YYYY').toDate()
            });
        });
        await Promise.all(reservationDetailsPromises);
        return res;
    }
    async findOne(id) {
        return this.reservationsService.findOne(id);
    }
    async update(id, updateReservationDto) {
        return this.reservationsService.update(id, updateReservationDto);
    }
    async remove(id) {
        return this.reservationsService.remove(id);
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, customize_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('query')),
    __param(2, (0, common_1.Query)('current')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Query)('keyword')),
    __param(5, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "findAll", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reservation_dto_1.UpdateReservationDto]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservationsController.prototype, "remove", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    __metadata("design:paramtypes", [reservations_service_1.ReservationsService,
        reservation_details_service_1.ReservationDetailsService])
], ReservationsController);
//# sourceMappingURL=reservations.controller.js.map