import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './schemas/reservation.schema';
import { Model } from 'mongoose';
export declare class ReservationsService {
    private readonly reservationModel;
    private readonly facilityModel;
    constructor(reservationModel: Model<Reservation>, facilityModel: Model<Reservation>);
    create(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, Reservation> & Reservation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(query?: string, current?: number, pageSize?: number, keyword?: string, userId?: string, status?: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: Omit<import("mongoose").Document<unknown, {}, Reservation> & Reservation & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
    }>;
    findOne(id: string): Promise<Reservation>;
    update(id: string, updateReservationDto: UpdateReservationDto): Promise<Reservation>;
    remove(id: string): Promise<void>;
}
