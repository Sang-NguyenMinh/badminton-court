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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsController = void 0;
const common_1 = require("@nestjs/common");
const reactions_service_1 = require("./reactions.service");
const create_reaction_dto_1 = require("./dto/create-reaction.dto");
const update_reaction_dto_1 = require("./dto/update-reaction.dto");
let ReactionsController = class ReactionsController {
    constructor(reactionsService) {
        this.reactionsService = reactionsService;
    }
    async findAll(query = '', current = 1, pageSize = 10) {
        return this.reactionsService.findAll(query, current, pageSize);
    }
    async create(createReactionDto) {
        return this.reactionsService.create(createReactionDto);
    }
    async findOne(id) {
        return this.reactionsService.findOne(id);
    }
    async update(id, updateReactionDto) {
        return this.reactionsService.update(id, updateReactionDto);
    }
    async remove(id) {
        return this.reactionsService.remove(id);
    }
};
exports.ReactionsController = ReactionsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('current')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reaction_dto_1.CreateReactionDto]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reaction_dto_1.UpdateReactionDto]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionsController.prototype, "remove", null);
exports.ReactionsController = ReactionsController = __decorate([
    (0, common_1.Controller)('reactions'),
    __metadata("design:paramtypes", [reactions_service_1.ReactionsService])
], ReactionsController);
//# sourceMappingURL=reactions.controller.js.map