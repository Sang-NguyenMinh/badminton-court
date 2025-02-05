import mongoose, { HydratedDocument } from 'mongoose';
export type InvoiceDetailDocument = HydratedDocument<InvoiceDetail>;
export declare class InvoiceDetail {
    invoiceId: mongoose.Schema.Types.ObjectId;
    itemId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    currentPrice: number;
}
export declare const InvoiceDetailSchema: mongoose.Schema<InvoiceDetail, mongoose.Model<InvoiceDetail, any, any, any, mongoose.Document<unknown, any, InvoiceDetail> & InvoiceDetail & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, InvoiceDetail, mongoose.Document<unknown, {}, mongoose.FlatRecord<InvoiceDetail>> & mongoose.FlatRecord<InvoiceDetail> & {
    _id: mongoose.Types.ObjectId;
}>;
