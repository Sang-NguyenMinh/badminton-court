import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationDetailsService } from '../reservation-details/reservation-details.service';
import { Types } from 'mongoose';
export declare class ReservationsController {
    private readonly reservationsService;
    private readonly reservationDetailsService;
    constructor(reservationsService: ReservationsService, reservationDetailsService: ReservationDetailsService);
    findAll(user: any, query?: string, current?: number, pageSize?: number, keyword?: string, status?: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: Omit<import("mongoose").Document<unknown, {}, import("./schemas/reservation.schema").Reservation> & import("./schemas/reservation.schema").Reservation & {
            _id: Types.ObjectId;
        }, never>[];
    }>;
    create(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/reservation.schema").Reservation> & import("./schemas/reservation.schema").Reservation & {
        _id: Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("./schemas/reservation.schema").Reservation>;
    update(id: string, updateReservationDto: UpdateReservationDto): Promise<import("./schemas/reservation.schema").Reservation>;
    remove(id: string): Promise<void>;
}
