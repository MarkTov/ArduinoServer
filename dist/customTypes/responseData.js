"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponseData = void 0;
const createResponseData = (message, data = undefined) => {
    const result = {
        message,
        data,
    };
    return result;
};
exports.createResponseData = createResponseData;
