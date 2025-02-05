"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const reservation_details_service_1 = require("./reservation-details.service");
const reservation_details_controller_1 = require("./reservation-details.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reservation_details_schema_1 = require("./schemas/reservation-details.schema");
const reservation_schema_1 = require("../reservations/schemas/reservation.schema");
let ReservationDetailsModule = class ReservationDetailsModule {
};
exports.ReservationDetailsModule = ReservationDetailsModule;
exports.ReservationDetailsModule = ReservationDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: reservation_details_schema_1.ReservationDetail.name, schema: reservation_details_schema_1.ReservationDetailSchema },
                { name: reservation_schema_1.Reservation.name, schema: reservation_schema_1.ReservationSchema },
            ]),
        ],
        controllers: [reservation_details_controller_1.ReservationDetailsController],
        providers: [reservation_details_service_1.ReservationDetailsService],
        exports: [reservation_details_service_1.ReservationDetailsService],
    })
], ReservationDetailsModule);
//# sourceMappingURL=reservation-details.module.js.map