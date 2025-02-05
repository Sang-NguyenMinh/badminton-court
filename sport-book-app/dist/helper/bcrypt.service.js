"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let BcryptService = class BcryptService {
    constructor() {
        this.saltRounds = 10;
    }
    async hashPassword(plainPassword) {
        try {
            return await (0, bcrypt_1.hash)(plainPassword, this.saltRounds);
        }
        catch (error) {
            console.error('Error hashing password:', error);
            throw new Error('Failed to hash password');
        }
    }
    async comparePassword(plainPassword, hashPassword) {
        try {
            return await (0, bcrypt_1.compare)(plainPassword, hashPassword);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.BcryptService = BcryptService;
exports.BcryptService = BcryptService = __decorate([
    (0, common_1.Injectable)()
], BcryptService);
//# sourceMappingURL=bcrypt.service.js.map