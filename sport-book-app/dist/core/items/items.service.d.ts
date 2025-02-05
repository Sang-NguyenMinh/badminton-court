import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { CreateItemDto, UpdateItemDto } from './dto/items.dto';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Item> & Item & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<Item>;
    remove(id: string): Promise<void>;
}
