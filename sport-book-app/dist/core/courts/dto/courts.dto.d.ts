export declare class CreateCourtDto {
    facilityID: string;
    name: string;
    pricePerHour: number;
    status?: boolean;
}
export declare class UpdateCourtDto {
    name?: string;
    pricePerHour?: number;
    status?: boolean;
}
export declare class CourtAvailabilityDto {
    facilityId: string;
    date: string;
}
export declare class CheckAvailabilityDto {
    facilityId: string;
    date: string;
    startTime: string;
    endTime: string;
}
