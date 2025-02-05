"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilitiesModule = void 0;
const common_1 = require("@nestjs/common");
const facilities_service_1 = require("./facilities.service");
const facilities_controller_1 = require("./facilities.controller");
const mongoose_1 = require("@nestjs/mongoose");
const facility_schema_1 = require("./schemas/facility.schema");
const courts_module_1 = require("../courts/courts.module");
let FacilitiesModule = class FacilitiesModule {
};
exports.FacilitiesModule = FacilitiesModule;
exports.FacilitiesModule = FacilitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [courts_module_1.CourtsModule,
            mongoose_1.MongooseModule.forFeature([
                { name: facility_schema_1.Facility.name, schema: facility_schema_1.FacilitySchema },
            ]),
        ],
        controllers: [facilities_controller_1.FacilitiesController],
        providers: [facilities_service_1.FacilitiesService],
        exports: [facilities_service_1.FacilitiesService],
    })
], FacilitiesModule);
//# sourceMappingURL=facilities.module.js.map