import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoice.dto';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findAll(query?: string, current?: number, pageSize?: number): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
            previous: boolean;
            next: boolean;
        };
        results: (import("mongoose").Document<unknown, {}, import("./schemas/invoice.schema").Invoice> & import("./schemas/invoice.schema").Invoice & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    create(createInvoiceDto: CreateInvoiceDto): Promise<import("./schemas/invoice.schema").Invoice>;
    findOne(id: string): Promise<import("./schemas/invoice.schema").Invoice>;
    update(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<import("./schemas/invoice.schema").Invoice>;
    remove(id: string): Promise<void>;
}
