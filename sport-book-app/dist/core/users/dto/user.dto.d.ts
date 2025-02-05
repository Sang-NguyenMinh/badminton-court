import mongoose from 'mongoose';
import { ACCOUNT_TYPE, ROLES } from 'src/config/type';
export declare class CreateUserDto {
    displayName?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    address?: string;
    avatar?: string;
    backgroundImage?: string;
    role?: ROLES;
    accountType?: ACCOUNT_TYPE;
    isActive?: boolean;
    codeId?: string;
    codeExpired?: Date;
}
export declare class UpdateUserDto {
    _id: mongoose.Schema.Types.ObjectId;
    displayName?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    address?: string;
    avatar?: string;
    backgroundImage?: string;
    role?: ROLES;
    accountType?: ACCOUNT_TYPE;
    isActive?: boolean;
    codeId?: string;
    codeExpired?: Date;
}
