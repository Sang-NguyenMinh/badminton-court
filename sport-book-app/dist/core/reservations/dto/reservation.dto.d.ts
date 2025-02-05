import mongoose from 'mongoose';
import { PAYMENT_METHOD, PAYMENT_STATUS } from 'src/config/type';
export declare class CreateReservationDto {
    userId: mongoose.Schema.Types.ObjectId;
    status?: PAYMENT_STATUS;
    totalAmount?: number;
    paymentMethod?: PAYMENT_METHOD;
}
export declare class UpdateReservationDto {
    _id: mongoose.Schema.Types.ObjectId;
    status?: PAYMENT_STATUS;
    totalAmount?: number;
    paymentMethod?: PAYMENT_METHOD;
}
