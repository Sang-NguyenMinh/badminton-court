import { ObjectId } from 'mongoose';
export interface GoogleUser {
    _id: ObjectId;
    email?: string;
    role?: string;
}
export declare enum ROLES {
    ADMIN = "Admin",
    OWNER = " Owner",
    USER = "User"
}
export declare enum ACCOUNT_TYPE {
    LOCAL = "Local",
    GOOGLE = "Google"
}
export declare enum PAYMENT_METHOD {
    CASH = "Cash",
    MOMO = "MoMo",
    ZALLOPAY = "ZaloPay"
}
export declare enum PAYMENT_STATUS {
    PENDING = "Pending",
    COMPLETED = "Completed",
    FAILED = "Failed",
    REFUNDED = "Refunded"
}
export declare enum POST_STATUS {
    DRAFT = "Draft",
    PUBLISHED = "Published",
    ARCHIVED = "Archived",
    DELETED = "Deleted"
}
export declare enum ITEM_STATUS {
    AVAILABLE = "Available",
    OUT_OF_STOCK = "Out of Stock",
    DISCONTINUED = "Discontinued"
}
export declare enum GROUP_STATUS {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    PENDING = "Pending",
    ARCHIVED = "Archived"
}
export declare enum GROUP_ROLE {
    ADMIN = "Admin",
    MEMBER = "Member"
}
export declare enum FRIENDSHIP_STATUS {
    PENDING = "Pending",
    ACCEPTED = "Accepted",
    DECLINED = "Declined",
    BLOCKED = "Blocked"
}
export declare enum WEEKDAY {
    MONDAY = "Th\u1EE9 hai",
    TUESDAY = "Th\u1EE9 ba",
    WEDNESDAY = "Th\u1EE9 t\u01B0",
    THURSDAY = "Th\u1EE9 n\u0103m",
    FRIDAY = "Th\u1EE9 s\u00E1u",
    SATURDAY = "Th\u1EE9 b\u1EA3y",
    SUNDAY = "Ch\u1EE7 nh\u1EADt"
}
