import { NotificationPayload, NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly pushNotificationService;
    constructor(pushNotificationService: NotificationService);
    sendBatchNotifications(body: {
        notifications: NotificationPayload[];
    }): Promise<{
        message: string;
        ticketCount: number;
    }>;
}
