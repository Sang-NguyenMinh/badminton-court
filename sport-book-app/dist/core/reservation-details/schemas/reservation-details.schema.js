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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationDetailSchema = exports.ReservationDetail = exports.ReservationDetailDetail = void 0;
class ReservationDetailDetail {
}
exports.ReservationDetailDetail = ReservationDetailDetail;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const court_schema_1 = require("../../courts/schemas/court.schema");
let ReservationDetail = class ReservationDetail {
};
exports.ReservationDetail = ReservationDetail;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: ReservationDetail.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], ReservationDetail.prototype, "reservationID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: court_schema_1.Court.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], ReservationDetail.prototype, "courtId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ReservationDetail.prototype, "reservationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    }),
    __metadata("design:type", String)
], ReservationDetail.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    }),
    __metadata("design:type", String)
], ReservationDetail.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ReservationDetail.prototype, "price", void 0);
exports.ReservationDetail = ReservationDetail = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ReservationDetail);
exports.ReservationDetailSchema = mongoose_1.SchemaFactory.createForClass(ReservationDetail);
//# sourceMappingURL=reservation-details.schema.js.map