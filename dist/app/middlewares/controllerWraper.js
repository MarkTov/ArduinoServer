"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerWraper = void 0;
const controllerWraper = function (callback) {
    const result = (req, res, next) => {
        try {
            callback(req, res);
        }
        catch (error) {
            next(error);
        }
    };
    return result;
};
exports.controllerWraper = controllerWraper;
