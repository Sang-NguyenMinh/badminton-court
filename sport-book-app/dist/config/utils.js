"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
exports.isPropertyExist = isPropertyExist;
const api_query_params_1 = __importDefault(require("api-query-params"));
const findAll = async ({ query = '', current = 1, pageSize = 10, model, sort = {}, }) => {
    const { filter, sort: parsedSort } = (0, api_query_params_1.default)(query);
    if (filter.current)
        delete filter.current;
    if (filter.pageSize)
        delete filter.pageSize;
    const totalItems = await model.countDocuments(filter).exec();
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;
    const hasPrevious = current > 1;
    const hasNext = current < totalPages;
    const normalizedSort = Object.fromEntries(Object.entries({ ...parsedSort, ...sort }).map(([key, value]) => [
        key,
        value === 1 || value === -1 ? value : 1,
    ]));
    const results = await model
        .find(filter)
        .limit(pageSize)
        .skip(skip)
        .sort(normalizedSort)
        .exec();
    return {
        meta: {
            current,
            pageSize,
            pages: totalPages,
            total: totalItems,
            previous: hasPrevious,
            next: hasNext,
        },
        results,
    };
};
exports.findAll = findAll;
async function isPropertyExist(model, propertyName, value) {
    const query = { [propertyName]: value };
    const exists = await model.exists(query);
    return exists ? true : false;
}
//# sourceMappingURL=utils.js.map