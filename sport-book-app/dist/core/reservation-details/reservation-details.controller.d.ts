import { ReservationDetailsService } from './reservation-details.service';
import { CreateReservationDetailDto, UpdateReservationDetailDto } from './dto/reservation-detail.dto';
export declare class ReservationDetailsController {
    private readonly reservationDetailsService;
    constructor(reservationDetailsService: ReservationDetailsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/reservation-details.schema").ReservationDetail> & import("./schemas/reservation-details.schema").ReservationDetail & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createReservationDetailDto: CreateReservationDetailDto): Promise<import("./schemas/reservation-details.schema").ReservationDetail>;
    findOne(id: string): Promise<import("./schemas/reservation-details.schema").ReservationDetail>;
    update(id: string, updateReservationDetailDto: UpdateReservationDetailDto): Promise<import("./schemas/reservation-details.schema").ReservationDetail>;
    remove(id: string): Promise<void>;
}
