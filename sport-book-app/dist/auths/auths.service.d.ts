import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/core/users/users.service';
import { BcryptService } from 'src/helper/bcrypt.service';
import { ChangePasswordAuthDto, CodeAuthDto, CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    private usersService;
    private readonly bcryptService;
    private jwtService;
    constructor(usersService: UsersService, bcryptService: BcryptService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
    loginWithGoogle(user: any): Promise<{
        user: {
            email: any;
            _id: any;
            role: any;
        };
        accessToken: string;
    }>;
    googleLogin(req: any, res: any): Promise<any>;
    handleRegister: (createAuthDto: CreateAuthDto) => Promise<{
        success: boolean;
        message: string;
        userId: any;
        email: string;
    }>;
    checkCode: (data: CodeAuthDto) => Promise<{
        isBeforeCheck: true;
    }>;
    retryActive: (email: string) => Promise<{
        _id: any;
        status: string;
    }>;
    retryPassword: (data: string) => Promise<{
        _id: any;
        email: string;
    }>;
    changePassword: (data: ChangePasswordAuthDto) => Promise<void>;
    validateGoogleUser(googleUser: any): Promise<any>;
}
