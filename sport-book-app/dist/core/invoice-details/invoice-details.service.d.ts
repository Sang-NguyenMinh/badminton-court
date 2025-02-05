import { InvoiceDetail } from './schemas/invoice-detail.schema';
import { Model } from 'mongoose';
import { CreateInvoiceDetailDto, UpdateInvoiceDetailDto } from './dto/invoice-detail.dto';
export declare class InvoiceDetailsService {
    private readonly invoiceDetailModel;
    constructor(invoiceDetailModel: Model<InvoiceDetail>);
    create(createInvoiceDetailDto: CreateInvoiceDetailDto): Promise<InvoiceDetail>;
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, InvoiceDetail> & InvoiceDetail & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<InvoiceDetail>;
    update(id: string, updateInvoiceDetailDto: UpdateInvoiceDetailDto): Promise<InvoiceDetail>;
    remove(id: string): Promise<void>;
}
