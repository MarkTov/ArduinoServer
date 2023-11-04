"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatcher = void 0;
const responseData_1 = require("../../customTypes/responseData");
const errorCatcher = function (error, req, res, next) {
    if ("status" in error) {
        res.json((0, responseData_1.createResponseData)(error.message)).status(error.status);
    }
    else {
        res.json((0, responseData_1.createResponseData)("Server error")).status(500);
    }
};
exports.errorCatcher = errorCatcher;
