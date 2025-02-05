import mongoose, { HydratedDocument } from 'mongoose';
export type CourtDocument = HydratedDocument<Court>;
export declare class Court {
    facilityId: mongoose.Schema.Types.ObjectId;
    name: string;
    pricePerHour: number;
    status: boolean;
}
export declare const CourtSchema: mongoose.Schema<Court, mongoose.Model<Court, any, any, any, mongoose.Document<unknown, any, Court> & Court & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Court, mongoose.Document<unknown, {}, mongoose.FlatRecord<Court>> & mongoose.FlatRecord<Court> & {
    _id: mongoose.Types.ObjectId;
}>;
