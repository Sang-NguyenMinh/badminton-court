import mongoose from 'mongoose';
import { WEEKDAY } from 'src/config/type';
export declare class CreateFacilityDto {
    name: string;
    address: string;
    hotline?: string[];
    startTime: string;
    endTime: string;
    workingDays?: WEEKDAY[];
}
export declare class UpdateFacilityDto {
    _id: mongoose.Schema.Types.ObjectId;
    name?: string;
    address?: string;
    hotline?: string[];
    startTime?: string;
    endTime?: string;
    workingDays?: WEEKDAY[];
}
