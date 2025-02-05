"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const expo_server_sdk_1 = require("expo-server-sdk");
let NotificationService = class NotificationService {
    constructor() {
        this.expo = new expo_server_sdk_1.Expo();
    }
    async sendBatchPushNotifications(notifications) {
        const messages = notifications
            .filter(({ pushToken }) => expo_server_sdk_1.Expo.isExpoPushToken(pushToken))
            .map(({ pushToken, message, data }) => ({
            to: pushToken,
            sound: 'default',
            body: message,
            data: data || {},
        }));
        const chunks = this.expo.chunkPushNotifications(messages);
        const tickets = [];
        for (const chunk of chunks) {
            try {
                const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
                tickets.push(...ticketChunk);
            }
            catch (error) {
                console.error('Error sending push notifications:', error);
            }
        }
        return tickets;
    }
    async checkPushNotificationStatus(tickets) {
        const receiptIds = tickets
            .filter((ticket) => 'id' in ticket)
            .map((ticket) => ticket.id);
        const receiptIdChunks = this.expo.chunkPushNotificationReceiptIds(receiptIds);
        for (const chunk of receiptIdChunks) {
            try {
                const receipts = await this.expo.getPushNotificationReceiptsAsync(chunk);
                for (const receiptId in receipts) {
                    const receipt = receipts[receiptId];
                    if (receipt.status === 'ok') {
                        continue;
                    }
                    else if (receipt.status === 'error') {
                        console.error(`There was an error sending a notification: ${receipt.message}`);
                        if (receipt.details && 'error' in receipt.details) {
                            console.error(`The error code is ${receipt.details.error}`);
                        }
                    }
                }
            }
            catch (error) {
                console.error('Error checking push notification status:', error);
            }
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NotificationService);
//# sourceMappingURL=notification.service.js.map