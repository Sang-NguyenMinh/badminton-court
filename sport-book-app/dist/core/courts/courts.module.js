"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtsModule = void 0;
const common_1 = require("@nestjs/common");
const courts_service_1 = require("./courts.service");
const courts_controller_1 = require("./courts.controller");
const mongoose_1 = require("@nestjs/mongoose");
const court_schema_1 = require("./schemas/court.schema");
const reservation_details_schema_1 = require("../reservation-details/schemas/reservation-details.schema");
const facility_schema_1 = require("../facilities/schemas/facility.schema");
let CourtsModule = class CourtsModule {
};
exports.CourtsModule = CourtsModule;
exports.CourtsModule = CourtsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: court_schema_1.Court.name, schema: court_schema_1.CourtSchema },
                { name: reservation_details_schema_1.ReservationDetail.name, schema: reservation_details_schema_1.ReservationDetailSchema },
                { name: facility_schema_1.Facility.name, schema: facility_schema_1.FacilitySchema },
            ]),
        ],
        controllers: [courts_controller_1.CourtsController],
        providers: [courts_service_1.CourtsService],
        exports: [courts_service_1.CourtsService],
    })
], CourtsModule);
//# sourceMappingURL=courts.module.js.map