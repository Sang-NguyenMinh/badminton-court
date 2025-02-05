import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto, UpdateFacilityDto } from './dto/facilities.dto';
import { CourtsService } from '../courts/courts.service';
import { Facility } from './schemas/facility.schema';
export declare class FacilitiesController {
    private facilitiesService;
    private courtService;
    constructor(facilitiesService: FacilitiesService, courtService: CourtsService);
    create(createFacilityDto: CreateFacilityDto): Promise<Facility>;
    getFacilityByPhone(phone: string | number): Promise<any>;
    findAll(query: string, current: string, pageSize: string, keyword: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Facility> & Facility & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Facility>;
    update(updateFacilityDto: UpdateFacilityDto): Promise<string>;
    remove(id: string): Promise<void>;
    getWorkingHours(id: string): Promise<{
        times: any[];
    }>;
    getCourts(facilityId: string): Promise<{
        courts: import("../courts/schemas/court.schema").Court[];
    }>;
}
