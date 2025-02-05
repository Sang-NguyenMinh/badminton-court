import { CourtsService } from './courts.service';
import { Court } from './schemas/court.schema';
import { UpdateCourtDto } from './dto/courts.dto';
export declare class CourtsController {
    private readonly courtsService;
    constructor(courtsService: CourtsService);
    findOne(id: string): Promise<Court>;
    update(id: string, updateCourtDto: UpdateCourtDto): Promise<Court>;
    remove(id: string): Promise<void>;
    getCourtAvailability(facilityId: string, date: string, startTime: string, endTime: string): Promise<{
        courts: {
            courtId: string;
            isAvailable: boolean;
            name: string;
            pricePerHour: number;
            message: string;
        }[];
    }>;
}
