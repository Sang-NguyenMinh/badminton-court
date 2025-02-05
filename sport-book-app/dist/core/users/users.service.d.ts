import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { BcryptService } from 'src/helper/bcrypt.service';
import { ChangePasswordAuthDto, CodeAuthDto } from 'src/auths/dto/create-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
export declare class UsersService {
    private userModel;
    private readonly bcryptService;
    private readonly mailerService;
    constructor(userModel: Model<User>, bcryptService: BcryptService, mailerService: MailerService);
    updateUserStatus(userId: string, isOnline: boolean): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<{
        _id: any;
    }>;
    findAll(query: string, current: number, pageSize: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (mongoose.Document<unknown, {}, User> & User & {
            _id: mongoose.Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    }>;
    findByUsernameOrEmail(keyword: string): Promise<mongoose.Document<unknown, {}, User> & User & {
        _id: mongoose.Types.ObjectId;
    }>;
    update(updateUserDto: UpdateUserDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(_id: string): Promise<mongoose.mongo.DeleteResult>;
    handleRegister(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
        userId: any;
        email: string;
    }>;
    handleActive(data: CodeAuthDto): Promise<{
        isBeforeCheck: true;
    }>;
    retryActive(email: string): Promise<{
        _id: any;
        status: string;
    }>;
    retryPassword(email: string): Promise<{
        _id: any;
        email: string;
    }>;
    changePassword(data: ChangePasswordAuthDto): Promise<void>;
}
