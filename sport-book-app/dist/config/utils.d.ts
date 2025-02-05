import { Model, Document } from 'mongoose';
export interface FindAllParams<T extends Document> {
    query?: string;
    current?: number;
    pageSize?: number;
    model: Model<T>;
    sort?: Record<string, number>;
}
export declare const findAll: <T extends Document>({ query, current, pageSize, model, sort, }: FindAllParams<T>) => Promise<{
    meta: {
        current: number;
        pageSize: number;
        pages: number;
        total: number;
        previous: boolean;
        next: boolean;
    };
    results: import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>[];
}>;
export declare function isPropertyExist(model: Model<any>, propertyName: string, value: string): Promise<boolean>;
