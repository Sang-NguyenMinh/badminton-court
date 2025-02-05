import { Invoice } from './schemas/invoice.schema';
import { Model } from 'mongoose';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoice.dto';
export declare class InvoicesService {
    private readonly invoiceModel;
    constructor(invoiceModel: Model<Invoice>);
    create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, Invoice> & Invoice & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<Invoice>;
    update(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice>;
    remove(id: string): Promise<void>;
}
