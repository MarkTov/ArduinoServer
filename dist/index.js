"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = require("dotenv").config();
console.log("Starting app");
app_1.app.listen(Number(3001), () => {
    console.log(`Server runnig on port`);
});


