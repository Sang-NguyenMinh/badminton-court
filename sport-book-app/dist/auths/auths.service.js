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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../core/users/users.service");
const bcrypt_service_1 = require("../helper/bcrypt.service");
const type_1 = require("../config/type");
let AuthService = class AuthService {
    constructor(usersService, bcryptService, jwtService) {
        this.usersService = usersService;
        this.bcryptService = bcryptService;
        this.jwtService = jwtService;
        this.handleRegister = async (createAuthDto) => {
            return await this.usersService.handleRegister(createAuthDto);
        };
        this.checkCode = async (data) => {
            return await this.usersService.handleActive(data);
        };
        this.retryActive = async (email) => {
            return await this.usersService.retryActive(email);
        };
        this.retryPassword = async (data) => {
            return await this.usersService.retryPassword(data);
        };
        this.changePassword = async (data) => {
            return await this.usersService.changePassword(data);
        };
    }
    async validateUser(username, password) {
        const user = await this.usersService.findByUsernameOrEmail(username);
        if (!user)
            return null;
        const isValidPassword = await this.bcryptService.comparePassword(password, user.password);
        if (!isValidPassword)
            return null;
        return user;
    }
    async login(user) {
        const payload = { email: user?.email, sub: user._id, role: user?.role };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async loginWithGoogle(user) {
        const payload = { username: user.email, sub: user._id, role: user.role };
        return {
            user: {
                email: user.email,
                _id: user._id,
                role: user.role,
            },
            accessToken: this.jwtService.sign(payload),
        };
    }
    async googleLogin(req, res) {
        if (!req.user) {
            return res.status(401).json({ message: 'Không có người dùng từ Google' });
        }
        const loginResult = await this.loginWithGoogle(req.user);
        return res.json(loginResult);
    }
    async validateGoogleUser(googleUser) {
        const user = await this.usersService.findByUsernameOrEmail(googleUser.email);
        if (!user) {
            const user = await this.usersService.create({
                displayName: `${googleUser.firstName} ${googleUser.lastName}`,
                role: type_1.ROLES.USER,
                email: googleUser.email,
                isActive: true,
            });
            return {
                _id: user._id,
                role: type_1.ROLES.USER,
                email: googleUser.email,
            };
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        bcrypt_service_1.BcryptService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auths.service.js.map