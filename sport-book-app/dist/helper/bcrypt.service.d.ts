export declare class BcryptService {
    private readonly saltRounds;
    hashPassword(plainPassword: string): Promise<string>;
    comparePassword(plainPassword: string, hashPassword: string): Promise<boolean>;
}
