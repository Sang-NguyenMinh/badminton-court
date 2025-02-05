import { ExpoPushTicket } from 'expo-server-sdk';
export interface NotificationPayload {
    pushToken: string;
    message: string;
    data?: Record<string, unknown>;
}
export declare class NotificationService {
    private expo;
    constructor();
    sendBatchPushNotifications(notifications: NotificationPayload[]): Promise<ExpoPushTicket[]>;
    checkPushNotificationStatus(tickets: ExpoPushTicket[]): Promise<void>;
}
