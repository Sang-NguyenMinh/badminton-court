import mongoose, { Types } from 'mongoose';
export declare class CreateReservationDetailDto {
    reservationID: Types.ObjectId;
    courtId: Types.ObjectId;
    reservationDate?: string | Date;
    startTime: string;
    endTime: string;
    price: number;
}
export declare class UpdateReservationDetailDto {
    _id: mongoose.Schema.Types.ObjectId;
    reservationID?: mongoose.Schema.Types.ObjectId;
    courtId?: mongoose.Schema.Types.ObjectId;
    startTime?: Date;
    endTime?: Date;
}
