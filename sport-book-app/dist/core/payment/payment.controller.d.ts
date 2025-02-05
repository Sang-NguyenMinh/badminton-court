import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createMomoPayment(paymentData: {
        orderId: string;
        amount: number;
        orderInfo: string;
    }): Promise<any>;
    verifyMomoPayment(paymentResult: {
        orderId: string;
        resultCode: string;
        message: string;
    }): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message?: undefined;
    }>;
}
