export declare class ReservationDetailDetail {
}
import mongoose, { HydratedDocument } from 'mongoose';
export type ReservationDetailDocument = HydratedDocument<ReservationDetail>;
export declare class ReservationDetail {
    reservationID: mongoose.Schema.Types.ObjectId;
    courtId: mongoose.Schema.Types.ObjectId;
    reservationDate?: Date;
    startTime: string;
    endTime: string;
    price: number;
}
export declare const ReservationDetailSchema: mongoose.Schema<ReservationDetail, mongoose.Model<ReservationDetail, any, any, any, mongoose.Document<unknown, any, ReservationDetail> & ReservationDetail & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ReservationDetail, mongoose.Document<unknown, {}, mongoose.FlatRecord<ReservationDetail>> & mongoose.FlatRecord<ReservationDetail> & {
    _id: mongoose.Types.ObjectId;
}>;
