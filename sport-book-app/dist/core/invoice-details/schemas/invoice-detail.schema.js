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
exports.InvoiceDetailSchema = exports.InvoiceDetail = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const invoice_schema_1 = require("../../invoices/schemas/invoice.schema");
const item_schema_1 = require("../../items/schemas/item.schema");
let InvoiceDetail = class InvoiceDetail {
};
exports.InvoiceDetail = InvoiceDetail;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: invoice_schema_1.Invoice.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], InvoiceDetail.prototype, "invoiceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: item_schema_1.Item.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], InvoiceDetail.prototype, "itemId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], InvoiceDetail.prototype, "currentPrice", void 0);
exports.InvoiceDetail = InvoiceDetail = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], InvoiceDetail);
exports.InvoiceDetailSchema = mongoose_1.SchemaFactory.createForClass(InvoiceDetail);
//# sourceMappingURL=invoice-detail.schema.js.map