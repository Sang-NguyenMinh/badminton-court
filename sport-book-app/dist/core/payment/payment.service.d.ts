export declare class PaymentService {
    private readonly endpoint;
    private readonly queryEndpoint;
    private readonly partnerCode;
    private readonly accessKey;
    private readonly secretKey;
    private readonly redirectUrl;
    private readonly ipnUrl;
    createPayment(orderId: string, amount: number, orderInfo: string): Promise<any>;
    verifyPayment(paymentResult: {
        orderId: string;
        resultCode: string;
        message: string;
    }): Promise<boolean>;
}
