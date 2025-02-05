import mongoose from 'mongoose';
export declare class CreateInvoiceDetailDto {
    invoiceId: mongoose.Schema.Types.ObjectId;
    itemId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    currentPrice: number;
}
export declare class UpdateInvoiceDetailDto {
    _id: mongoose.Schema.Types.ObjectId;
    invoiceId?: mongoose.Schema.Types.ObjectId;
    itemId?: mongoose.Schema.Types.ObjectId;
    quantity?: number;
    currentPrice?: number;
}
