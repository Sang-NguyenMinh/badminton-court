import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './dto/items.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/item.schema").Item> & import("./schemas/item.schema").Item & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createItemDto: CreateItemDto): Promise<import("./schemas/item.schema").Item>;
    findOne(id: string): Promise<import("./schemas/item.schema").Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<import("./schemas/item.schema").Item>;
    remove(id: string): Promise<void>;
}
