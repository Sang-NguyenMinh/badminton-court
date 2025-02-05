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
exports.AuthsController = void 0;
const common_1 = require("@nestjs/common");
const auths_service_1 = require("./auths.service");
const passport_1 = require("@nestjs/passport");
const customize_1 = require("../decorators/customize");
const mailer_1 = require("@nestjs-modules/mailer");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const users_service_1 = require("../core/users/users.service");
const user_dto_1 = require("../core/users/dto/user.dto");
let AuthsController = class AuthsController {
    constructor(authsService, mailerService, userService) {
        this.authsService = authsService;
        this.mailerService = mailerService;
        this.userService = userService;
    }
    async googleAuthRedirect(req, res) {
        try {
            const data = await this.authsService.loginWithGoogle(req.user);
            return data;
        }
        catch (error) { }
    }
    async login(req) {
        return this.authsService.login(req.user);
    }
    register(createUserDto) {
        return this.userService.handleRegister(createUserDto);
    }
    checkCode(codeAuthDto) {
        return this.authsService.checkCode(codeAuthDto);
    }
    retryActive(email) {
        return this.authsService.retryActive(email);
    }
    retryPassword(email) {
        return this.authsService.retryPassword(email);
    }
    changePassword(data) {
        return this.authsService.changePassword(data);
    }
};
exports.AuthsController = AuthsController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Get)('gg/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Response]),
    __metadata("design:returntype", Promise)
], AuthsController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, customize_1.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthsController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, customize_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('check-code'),
    (0, customize_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.CodeAuthDto]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "checkCode", null);
__decorate([
    (0, common_1.Post)('retry-active'),
    (0, customize_1.Public)(),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "retryActive", null);
__decorate([
    (0, common_1.Post)('retry-password'),
    (0, customize_1.Public)(),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "retryPassword", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, customize_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ChangePasswordAuthDto]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "changePassword", null);
exports.AuthsController = AuthsController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auths_service_1.AuthService,
        mailer_1.MailerService,
        users_service_1.UsersService])
], AuthsController);
//# sourceMappingURL=auths.controller.js.map