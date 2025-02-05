import { Court } from './schemas/court.schema';
import { Model, Types } from 'mongoose';
import { CreateCourtDto, UpdateCourtDto } from './dto/courts.dto';
import { ReservationDetail } from '../reservation-details/schemas/reservation-details.schema';
import { Facility } from '../facilities/schemas/facility.schema';
export declare class CourtsService {
    private readonly courtModel;
    private readonly reservationDetailModel;
    private readonly facilityModel;
    constructor(courtModel: Model<Court>, reservationDetailModel: Model<ReservationDetail>, facilityModel: Model<Facility>);
    create(createCourtDto: CreateCourtDto): Promise<Court>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Court> & Court & {
            _id: Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Court>;
    update(id: string, updateCourtDto: UpdateCourtDto): Promise<Court>;
    remove(id: string): Promise<void>;
    getCourtsByFacilityId(facilityId: string): Promise<Court[]>;
    checkCourtAvailability(facilityId: string, date: string, startTime: string | null, endTime: string | null): Promise<{
        courts: {
            courtId: string;
            isAvailable: boolean;
            name: string;
            pricePerHour: number;
            message: string;
        }[];
    }>;
}
