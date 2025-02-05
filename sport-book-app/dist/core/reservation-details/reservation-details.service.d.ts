import { ReservationDetail } from './schemas/reservation-details.schema';
import { Model } from 'mongoose';
import { CreateReservationDetailDto, UpdateReservationDetailDto } from './dto/reservation-detail.dto';
export declare class ReservationDetailsService {
    private readonly reservationDetailModel;
    constructor(reservationDetailModel: Model<ReservationDetail>);
    create(createReservationDetailDto: CreateReservationDetailDto): Promise<ReservationDetail>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, ReservationDetail> & ReservationDetail & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<ReservationDetail>;
    update(id: string, updateReservationDetailDto: UpdateReservationDetailDto): Promise<ReservationDetail>;
    remove(id: string): Promise<void>;
}
