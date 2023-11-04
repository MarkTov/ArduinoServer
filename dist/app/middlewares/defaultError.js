"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultError = void 0;
const defaultError = function () {
    const error = {
        message: "Wrong path",
        status: 404,
    };
    throw error;
};
exports.defaultError = defaultError;
