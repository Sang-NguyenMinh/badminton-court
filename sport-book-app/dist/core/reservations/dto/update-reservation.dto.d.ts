import mongoose from 'mongoose';
export declare class UpdateReservationDto {
    userId: mongoose.Types.ObjectId;
    reservationDate: Date;
    status?: string;
    totalAmount: number;
}
