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
exports.CourtsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const court_schema_1 = require("./schemas/court.schema");
const mongoose_2 = require("mongoose");
const api_query_params_1 = __importDefault(require("api-query-params"));
const reservation_details_schema_1 = require("../reservation-details/schemas/reservation-details.schema");
const facility_schema_1 = require("../facilities/schemas/facility.schema");
const moment_1 = __importDefault(require("moment"));
let CourtsService = class CourtsService {
    constructor(courtModel, reservationDetailModel, facilityModel) {
        this.courtModel = courtModel;
        this.reservationDetailModel = reservationDetailModel;
        this.facilityModel = facilityModel;
    }
    async create(createCourtDto) {
        const newCourt = new this.courtModel(createCourtDto);
        return newCourt.save();
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        const totalItems = await this.courtModel.countDocuments(filter).exec();
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.courtModel
            .find(filter)
            .limit(pageSize)
            .skip(skip)
            .sort(sort)
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
        const court = await this.courtModel.findById(id).exec();
        if (!court) {
            throw new common_1.NotFoundException(`Court with ID ${id} not found`);
        }
        return court;
    }
    async update(id, updateCourtDto) {
        const updatedCourt = await this.courtModel
            .findByIdAndUpdate(id, updateCourtDto, { new: true })
            .exec();
        if (!updatedCourt) {
            throw new common_1.NotFoundException(`Court with ID ${id} not found`);
        }
        return updatedCourt;
    }
    async remove(id) {
        const result = await this.courtModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Court with ID ${id} not found`);
        }
    }
    async getCourtsByFacilityId(facilityId) {
        return this.courtModel.find({ facilityId }).exec();
    }
    async checkCourtAvailability(facilityId, date, startTime, endTime) {
        const courts = await this.courtModel.find({ facilityId });
        const reservationDate = moment_1.default
            .utc(date, 'DD/MM/YYYY')
            .startOf('day')
            .toDate();
        const nextDay = moment_1.default.utc(reservationDate).add(1, 'days').toDate();
        const courtsAvailability = await Promise.all(courts.map(async (court) => {
            let query = {
                courtId: court._id,
                reservationID: { $exists: true },
                reservationDate: {
                    $gte: reservationDate,
                    $lt: nextDay,
                },
            };
            if (startTime !== null && endTime !== null) {
                query.$or = [
                    { startTime: { $lt: endTime }, endTime: { $gt: startTime } },
                    { startTime: { $gte: startTime, $lt: endTime } },
                    { endTime: { $gt: startTime, $lte: endTime } },
                ];
            }
            const reservations = await this.reservationDetailModel.find(query);
            const isAvailable = reservations.length === 0;
            return {
                courtId: court._id.toString(),
                isAvailable,
                name: court.name,
                pricePerHour: court.pricePerHour,
                message: isAvailable
                    ? 'Court is available'
                    : 'Court is not available',
            };
        }));
        return { courts: courtsAvailability };
    }
};
exports.CourtsService = CourtsService;
exports.CourtsService = CourtsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(court_schema_1.Court.name)),
    __param(1, (0, mongoose_1.InjectModel)(reservation_details_schema_1.ReservationDetail.name)),
    __param(2, (0, mongoose_1.InjectModel)(facility_schema_1.Facility.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CourtsService);
//# sourceMappingURL=courts.service.js.map