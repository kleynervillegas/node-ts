"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginate = void 0;
const getPaginate = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};
exports.getPaginate = getPaginate;
