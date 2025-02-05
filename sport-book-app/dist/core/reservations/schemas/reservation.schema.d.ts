import mongoose, { HydratedDocument } from 'mongoose';
import { PAYMENT_METHOD, PAYMENT_STATUS } from 'src/config/type';
export type ReservationDocument = HydratedDocument<Reservation>;
export declare class Reservation {
    userId: mongoose.Schema.Types.ObjectId;
    facility: mongoose.Schema.Types.ObjectId;
    status?: PAYMENT_STATUS;
    reservationDate?: Date;
    totalAmount?: number;
    paymentMethod?: PAYMENT_METHOD;
}
export declare const ReservationSchema: mongoose.Schema<Reservation, mongoose.Model<Reservation, any, any, any, mongoose.Document<unknown, any, Reservation> & Reservation & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Reservation, mongoose.Document<unknown, {}, mongoose.FlatRecord<Reservation>> & mongoose.FlatRecord<Reservation> & {
    _id: mongoose.Types.ObjectId;
}>;
