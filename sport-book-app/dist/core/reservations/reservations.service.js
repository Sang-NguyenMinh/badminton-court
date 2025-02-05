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
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const reservation_schema_1 = require("./schemas/reservation.schema");
const mongoose_2 = require("mongoose");
const api_query_params_1 = __importDefault(require("api-query-params"));
const moment_1 = __importDefault(require("moment"));
const facility_schema_1 = require("../facilities/schemas/facility.schema");
const type_1 = require("../../config/type");
let ReservationsService = class ReservationsService {
    constructor(reservationModel, facilityModel) {
        this.reservationModel = reservationModel;
        this.facilityModel = facilityModel;
    }
    async create(createReservationDto) {
        const date = moment_1.default
            .utc(createReservationDto.reservationDate, 'MM/DD/YYYY')
            .toDate();
        createReservationDto.reservationDate = date;
        const newReservation = new this.reservationModel(createReservationDto);
        return newReservation.save();
    }
    async findAll(query = '', current = 1, pageSize = 10, keyword = '', userId, status) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        let facilityIds = [];
        if (keyword) {
            const facilities = await this.facilityModel
                .find({
                name: { $regex: keyword, $options: 'i' },
            })
                .select('_id');
            facilityIds = facilities.map((f) => f._id);
        }
        let baseQuery = { ...filter };
        if (keyword) {
            baseQuery.facility = { $in: facilityIds };
        }
        if (userId) {
            baseQuery.userId = userId;
        }
        console.log(status);
        if (status &&
            Object.values(type_1.PAYMENT_STATUS).includes(status)) {
            baseQuery.status = status;
        }
        const totalItems = await this.reservationModel
            .countDocuments(baseQuery)
            .exec();
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.reservationModel
            .find(baseQuery)
            .limit(pageSize)
            .skip(skip)
            .sort(sort)
            .populate('facility', 'name address hotline avatar')
            .exec();
        return {
            meta: {
                current,
                pageSize,
                pages: totalPages,
                total: totalItems,
                previous: hasPrevious,
                next: hasNext,
            },
            results,
        };
    }
    async findOne(id) {
        const reservation = await this.reservationModel.findById(id).exec();
        if (!reservation) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
        return reservation;
    }
    async update(id, updateReservationDto) {
        const updatedReservation = await this.reservationModel
            .findByIdAndUpdate(id, updateReservationDto, { new: true })
            .exec();
        if (!updatedReservation) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
        return updatedReservation;
    }
    async remove(id) {
        const result = await this.reservationModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservation_schema_1.Reservation.name)),
    __param(1, (0, mongoose_1.InjectModel)(facility_schema_1.Facility.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map