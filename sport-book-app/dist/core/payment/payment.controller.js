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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const customize_1 = require("../../decorators/customize");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createMomoPayment(paymentData) {
        try {
            const result = await this.paymentService.createPayment(paymentData.orderId, paymentData.amount, paymentData.orderInfo);
            return result;
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async verifyMomoPayment(paymentResult) {
        try {
            const isValid = await this.paymentService.verifyPayment(paymentResult);
            if (isValid) {
                return { success: true, message: 'Payment verified successfully' };
            }
            else {
                return { success: false, message: 'Payment verification failed' };
            }
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)('create-momo-payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createMomoPayment", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)('verify-momo-payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "verifyMomoPayment", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map