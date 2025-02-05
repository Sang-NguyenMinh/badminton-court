import { InvoiceDetailsService } from './invoice-details.service';
import { CreateInvoiceDetailDto, UpdateInvoiceDetailDto } from './dto/invoice-detail.dto';
export declare class InvoiceDetailsController {
    private readonly invoiceDetailsService;
    constructor(invoiceDetailsService: InvoiceDetailsService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/invoice-detail.schema").InvoiceDetail> & import("./schemas/invoice-detail.schema").InvoiceDetail & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createInvoiceDetailDto: CreateInvoiceDetailDto): Promise<import("./schemas/invoice-detail.schema").InvoiceDetail>;
    findOne(id: string): Promise<import("./schemas/invoice-detail.schema").InvoiceDetail>;
    update(id: string, updateInvoiceDetailDto: UpdateInvoiceDetailDto): Promise<import("./schemas/invoice-detail.schema").InvoiceDetail>;
    remove(id: string): Promise<void>;
}
