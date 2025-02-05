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
exports.ReactionSchema = exports.Reaction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const user_schema_1 = require("../../users/schemas/user.schema");
const post_schema_1 = require("../../posts/schemas/post.schema");
let Reaction = class Reaction {
};
exports.Reaction = Reaction;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Reaction.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: post_schema_1.Post.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Reaction.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Reaction.prototype, "type", void 0);
exports.Reaction = Reaction = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Reaction);
exports.ReactionSchema = mongoose_1.SchemaFactory.createForClass(Reaction);
//# sourceMappingURL=reaction.schema.js.map