import { GROUP_STATUS } from 'src/config/type';
export declare class CreateGroupDto {
    name: string;
    description: string;
    status?: GROUP_STATUS;
}
export declare class UpdateGroupDto {
    _id: string;
    name?: string;
    description?: string;
    status?: GROUP_STATUS;
}
