"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = __importStar(require("mongoose"));
const bcrypt_service_1 = require("../../helper/bcrypt.service");
const api_query_params_1 = __importDefault(require("api-query-params"));
const dayjs_1 = __importDefault(require("dayjs"));
const uuid_1 = require("uuid");
const mailer_1 = require("@nestjs-modules/mailer");
const utils_1 = require("../../config/utils");
let UsersService = class UsersService {
    constructor(userModel, bcryptService, mailerService) {
        this.userModel = userModel;
        this.bcryptService = bcryptService;
        this.mailerService = mailerService;
    }
    async updateUserStatus(userId, isOnline) {
        await this.userModel.findByIdAndUpdate(userId, {
            isOnline,
            lastSeen: new Date(),
        });
    }
    async create(createUserDto) {
        const { displayName, username, role, email, isActive } = createUserDto;
        let password = null;
        if (createUserDto.password)
            password = await this.bcryptService.hashPassword(createUserDto.password);
        const user = new this.userModel({
            displayName,
            username,
            password,
            role,
            email,
            isActive,
        });
        user.save();
        return {
            _id: user._id,
        };
    }
    async findAll(query, current, pageSize) {
        const { filter, sort } = (0, api_query_params_1.default)(query);
        if (filter.current)
            delete filter.current;
        if (filter.pageSize)
            delete filter.pageSize;
        if (!current)
            current = 1;
        if (!pageSize)
            pageSize = 10;
        const totalItems = (await this.userModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const skip = (current - 1) * pageSize;
        const hasPrevious = current > 1;
        const hasNext = current < totalPages;
        const results = await this.userModel
            .find(filter)
            .limit(pageSize)
            .skip(skip)
            .select('-password')
            .sort(sort);
        return {
            meta: {
                current: current,
                pageSize: pageSize,
                pages: totalPages,
                total: totalItems,
                previous: hasPrevious,
                next: hasNext,
            },
            results,
        };
    }
    async findOne(id) {
        const user = await this.userModel
            .findById(id)
            .select('displayName username email phone address avatar backgroundImage role accountType isActive pushToken')
            .exec();
        return user;
    }
    async findByUsernameOrEmail(keyword) {
        return await this.userModel.findOne({
            $or: [{ email: keyword }, { username: keyword }],
        });
    }
    async update(updateUserDto) {
        return await this.userModel.updateOne({ _id: updateUserDto._id }, { ...updateUserDto });
    }
    async remove(_id) {
        if (mongoose_2.default.isValidObjectId(_id)) {
            return await this.userModel.deleteOne({ _id });
        }
        else {
            throw new common_1.BadRequestException('Id không đúng định dạng mongodb');
        }
    }
    async handleRegister(createUserDto) {
        const { username, password, email } = createUserDto;
        const isExistEmail = await (0, utils_1.isPropertyExist)(this.userModel, 'email', email);
        if (isExistEmail === true) {
            throw new common_1.BadRequestException(`Email ${email} already exists, please use another email.`);
        }
        const isExistUsername = await (0, utils_1.isPropertyExist)(this.userModel, 'username', username);
        if (isExistUsername === true) {
            throw new common_1.BadRequestException(`Username ${username} already exists, please use another username.`);
        }
        const hashPassword = await this.bcryptService.hashPassword(password);
        const codeId = (0, uuid_1.v4)();
        try {
            const user = await this.userModel.create({
                username,
                email,
                password: hashPassword,
                codeId: codeId,
                codeExpired: (0, dayjs_1.default)().add(5, 'minutes'),
            });
            try {
                await this.mailerService.sendMail({
                    to: user.email,
                    subject: 'Activate your account at Sport book',
                    template: 'register',
                    context: {
                        name: user.displayName ?? user.email,
                        activationCode: codeId,
                    },
                });
            }
            catch (emailError) {
                console.error('Error sending activation email:', emailError);
                throw new common_1.InternalServerErrorException('An error occurred while sending activation email.');
            }
            return {
                success: true,
                message: 'User registered successfully',
                userId: user._id,
                email: email,
            };
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new common_1.InternalServerErrorException('An error occurred while creating the user.');
        }
    }
    async handleActive(data) {
        const user = await this.userModel.findOne({
            _id: data._id,
        });
        if (!user) {
            throw new common_1.BadRequestException('Mã code không hợp lệ hoặc đã hết hạn');
        }
        const isBeforeCheck = (0, dayjs_1.default)().isBefore(user.codeExpired);
        if (isBeforeCheck) {
            await this.userModel.updateOne({ _id: data._id }, {
                isActive: true,
            });
            return { isBeforeCheck };
        }
        else {
            throw new common_1.BadRequestException('Mã code không hợp lệ hoặc đã hết hạn');
        }
    }
    async retryActive(email) {
        const user = await this.userModel.findOne({ email });
        console.log(user);
        if (!user) {
            throw new common_1.BadRequestException('Tài khoản không tồn tại');
        }
        if (user.isActive) {
            throw new common_1.BadRequestException('Tài khoản đã được kích hoạt');
        }
        const codeId = (0, uuid_1.v4)();
        await user.updateOne({
            codeId: codeId,
            codeExpired: (0, dayjs_1.default)().add(5, 'minutes'),
        });
        this.mailerService.sendMail({
            to: user.email,
            subject: 'Activate your account at Sport book app',
            template: 'register',
            context: {
                name: user?.displayName ?? user.email,
                activationCode: codeId,
            },
        });
        return {
            _id: user._id,
            status: 'success',
        };
    }
    async retryPassword(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.BadRequestException('Tài khoản không tồn tại');
        }
        const codeId = (0, uuid_1.v4)();
        await user.updateOne({
            codeId: codeId,
            codeExpired: (0, dayjs_1.default)().add(5, 'minutes'),
        });
        this.mailerService.sendMail({
            to: user.email,
            subject: 'Change your password account at Sport book app',
            template: 'register',
            context: {
                name: user?.displayName ?? user.email,
                resetPasswordLink: 'facebook.com',
            },
        });
        return { _id: user._id, email: user.email };
    }
    async changePassword(data) {
        const user = await this.userModel.findOne({ email: data.email });
        if (!user) {
            throw new common_1.BadRequestException('Tài khoản không tồn tại');
        }
        try {
            const newPassword = await this.bcryptService.hashPassword(data.password);
            await user.updateOne({ password: newPassword });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Something wrong when update password');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        bcrypt_service_1.BcryptService,
        mailer_1.MailerService])
], UsersService);
//# sourceMappingURL=users.service.js.map