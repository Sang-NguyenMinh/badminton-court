import mongoose from 'mongoose';
import { PAYMENT_METHOD } from 'src/config/type';
interface CourtParams {
    id: string;
    startTime: string;
    endTime: string;
    price: number;
}
export declare class CreateReservationDto {
    userId: mongoose.Types.ObjectId;
    facility: mongoose.Types.ObjectId;
    status?: string;
    paymentMethod: PAYMENT_METHOD;
    reservationDate?: string | Date;
    totalAmount: number;
    courts: CourtParams[];
}
export {};
