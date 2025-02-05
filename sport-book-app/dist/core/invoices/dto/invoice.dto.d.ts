import mongoose from 'mongoose';
import { PAYMENT_METHOD, PAYMENT_STATUS } from 'src/config/type';
export declare class CreateInvoiceDto {
    reservationId: mongoose.Schema.Types.ObjectId;
    invoiceDate: Date;
    status?: PAYMENT_STATUS;
    paymentMethod?: PAYMENT_METHOD;
    totalAmount: number;
}
export declare class UpdateInvoiceDto {
    _id: mongoose.Schema.Types.ObjectId;
    reservationId?: mongoose.Schema.Types.ObjectId;
    invoiceDate?: Date;
    status?: PAYMENT_STATUS;
    paymentMethod?: PAYMENT_METHOD;
    totalAmount?: number;
}
