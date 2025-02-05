import { Facility } from './schemas/facility.schema';
import { Model } from 'mongoose';
import { CreateFacilityDto, UpdateFacilityDto } from './dto/facilities.dto';
export declare class FacilitiesService {
    private facilityModel;
    constructor(facilityModel: Model<Facility>);
    create(createFacilityDto: CreateFacilityDto): Promise<Facility>;
    findAll(query: string, current: number, pageSize: number, keyword: string): Promise<{
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
    getFacilityByPhone(phone: string): Promise<Facility>;
    getWorkingHours(facilityId: string): Promise<{
        times: any[];
    }>;
}
