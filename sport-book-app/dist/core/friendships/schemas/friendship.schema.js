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
exports.FriendshipSchema = exports.Friendship = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const type_1 = require("../../../config/type");
const user_schema_1 = require("../../users/schemas/user.schema");
let Friendship = class Friendship {
};
exports.Friendship = Friendship;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Friendship.prototype, "userId1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Friendship.prototype, "userId2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: type_1.FRIENDSHIP_STATUS, default: type_1.FRIENDSHIP_STATUS.PENDING }),
    __metadata("design:type", String)
], Friendship.prototype, "status", void 0);
exports.Friendship = Friendship = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Friendship);
exports.FriendshipSchema = mongoose_1.SchemaFactory.createForClass(Friendship);
//# sourceMappingURL=friendship.schema.js.map