import mongoose, { HydratedDocument } from 'mongoose';
import { ITEM_STATUS } from 'src/config/type';
export type ItemDocument = HydratedDocument<Item>;
export declare class Item {
    facilityId: mongoose.Schema.Types.ObjectId;
    name: string;
    price: number;
    amount: number;
    status: ITEM_STATUS;
}
export declare const ItemSchema: mongoose.Schema<Item, mongoose.Model<Item, any, any, any, mongoose.Document<unknown, any, Item> & Item & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Item, mongoose.Document<unknown, {}, mongoose.FlatRecord<Item>> & mongoose.FlatRecord<Item> & {
    _id: mongoose.Types.ObjectId;
}>;
