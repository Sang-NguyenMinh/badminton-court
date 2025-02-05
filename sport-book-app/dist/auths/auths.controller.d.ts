import { AuthService } from './auths.service';
import { MailerService } from '@nestjs-modules/mailer';
import { ChangePasswordAuthDto, CodeAuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/core/users/users.service';
import { CreateUserDto } from 'src/core/users/dto/user.dto';
export declare class AuthsController {
    private readonly authsService;
    private readonly mailerService;
    private readonly userService;
    constructor(authsService: AuthService, mailerService: MailerService, userService: UsersService);
    googleAuthRedirect(req: any, res: Response): Promise<{
        user: {
            email: any;
            _id: any;
            role: any;
        };
        accessToken: string;
    }>;
    login(req: any): Promise<{
        accessToken: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
        userId: any;
        email: string;
    }>;
    checkCode(codeAuthDto: CodeAuthDto): Promise<{
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
