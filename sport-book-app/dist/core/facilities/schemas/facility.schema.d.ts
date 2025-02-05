import mongoose, { HydratedDocument } from 'mongoose';
import { WEEKDAY } from 'src/config/type';
export type FacilityDocument = HydratedDocument<Facility>;
export declare class Facility {
    ownerId: mongoose.Schema.Types.ObjectId;
    name: string;
    address: string;
    hotline?: string[];
    avatar?: string;
    startTime: string;
    endTime: string;
    workingDays: WEEKDAY[];
}
export declare const FacilitySchema: mongoose.Schema<Facility, mongoose.Model<Facility, any, any, any, mongoose.Document<unknown, any, Facility> & Facility & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Facility, mongoose.Document<unknown, {}, mongoose.FlatRecord<Facility>> & mongoose.FlatRecord<Facility> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface TimeSlot {
    time: string;
    isBooked: boolean;
}
export interface CourtAvailability {
    id: string;
    name: string;
    pricePerHour: number;
    timeSlots: TimeSlot[];
}
