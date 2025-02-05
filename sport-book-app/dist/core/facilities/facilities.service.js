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
exports.FacilitiesService = void 0;
const common_1 = require("@nestjs/common");
const facility_schema_1 = require("./schemas/facility.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const api_query_params_1 = __importDefault(require("api-query-params"));
const moment_1 = __importDefault(require("moment"));
let FacilitiesService = class FacilitiesService {
    constructor(facilityModel) {
        this.facilityModel = facilityModel;
    }
    async create(createFacilityDto) {
        const newFacility = new this.facilityModel(createFacilityDto);
        return newFacility.save();
    }
    async findAll(query, current, pageSize, keyword) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        if (!current)
            current = 1;
        if (!pageSize)
            pageSize = 10;
        if (keyword) {
            filter.$or = [
                { name: { $regex: keyword, $options: 'i' } },
                { address: { $regex: keyword, $options: 'i' } },
            ];
        }
        const totalItems = (await this.facilityModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.facilityModel
            .find(filter)
            .limit(pageSize)
            .skip(skip)
            .sort(sort);
        return {
            meta: {
                current: current,
                pageSize: pageSize,
                pages: totalPages,
                total: totalItems,
                previous: hasPrevious,
                next: hasNext,
            },
            results,
        };
    }
    async findOne(id) {
        const facility = await this.facilityModel.findById(id).exec();
        if (!facility) {
            throw new common_1.NotFoundException(`Facility with ID ${id} not found`);
        }
        return facility;
    }
    async update(updateFacilityDto) {
        const updatedFacility = await this.facilityModel
            .findByIdAndUpdate(updateFacilityDto._id, updateFacilityDto)
            .exec();
        if (!updatedFacility) {
            throw new common_1.NotFoundException(`Facility with ID ${updateFacilityDto._id} not found`);
        }
        return 'Thành công';
    }
    async remove(id) {
        const result = await this.facilityModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Facility with ID ${id} not found`);
        }
    }
    async getFacilityByPhone(phone) {
        return this.facilityModel.findOne({ hotline: phone }).exec();
    }
    async getWorkingHours(facilityId) {
        const facility = await this.findOne(facilityId);
        const { startTime, endTime } = facility;
        const start = (0, moment_1.default)(startTime, 'HH:mm');
        const end = (0, moment_1.default)(endTime, 'HH:mm');
        const times = [];
        while (start <= end) {
            times.push(start.format('HH:mm'));
            start.add(30, 'minutes');
        }
        return { times };
    }
};
exports.FacilitiesService = FacilitiesService;
exports.FacilitiesService = FacilitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(facility_schema_1.Facility.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FacilitiesService);
//# sourceMappingURL=facilities.service.js.map