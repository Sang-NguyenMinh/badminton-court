import { UserRole } from 'src/core/users/constants';
export interface AuthenticatedUser {
    role: UserRole;
}
