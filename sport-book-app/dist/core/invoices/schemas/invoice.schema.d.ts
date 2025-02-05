import mongoose, { HydratedDocument } from 'mongoose';
import { PAYMENT_METHOD, PAYMENT_STATUS } from 'src/config/type';
export type InvoiceDocument = HydratedDocument<Invoice>;
export declare class Invoice {
    reservationId: mongoose.Schema.Types.ObjectId;
    invoiceDate: Date;
    status: PAYMENT_STATUS;
    paymentMethod: PAYMENT_METHOD;
    totalAmount: number;
}
export declare const InvoiceSchema: mongoose.Schema<Invoice, mongoose.Model<Invoice, any, any, any, mongoose.Document<unknown, any, Invoice> & Invoice & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Invoice, mongoose.Document<unknown, {}, mongoose.FlatRecord<Invoice>> & mongoose.FlatRecord<Invoice> & {
    _id: mongoose.Types.ObjectId;
}>;
