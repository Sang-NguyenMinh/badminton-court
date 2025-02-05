"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const invoice_details_service_1 = require("./invoice-details.service");
const invoice_details_controller_1 = require("./invoice-details.controller");
const mongoose_1 = require("@nestjs/mongoose");
const invoice_detail_schema_1 = require("./schemas/invoice-detail.schema");
let InvoiceDetailsModule = class InvoiceDetailsModule {
};
exports.InvoiceDetailsModule = InvoiceDetailsModule;
exports.InvoiceDetailsModule = InvoiceDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: invoice_detail_schema_1.InvoiceDetail.name, schema: invoice_detail_schema_1.InvoiceDetailSchema },
            ]),
        ],
        controllers: [invoice_details_controller_1.InvoiceDetailsController],
        providers: [invoice_details_service_1.InvoiceDetailsService],
    })
], InvoiceDetailsModule);
//# sourceMappingURL=invoice-details.module.js.map