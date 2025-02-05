import mongoose from 'mongoose';
import { ITEM_STATUS } from 'src/config/type';
export declare class CreateItemDto {
    facilityId: mongoose.Schema.Types.ObjectId;
    name: string;
    price: number;
    amount: number;
    status: ITEM_STATUS;
}
export declare class UpdateItemDto {
    _id: mongoose.Schema.Types.ObjectId;
    facilityId?: mongoose.Schema.Types.ObjectId;
    name?: string;
    price?: number;
    amount?: number;
    status?: ITEM_STATUS;
}
