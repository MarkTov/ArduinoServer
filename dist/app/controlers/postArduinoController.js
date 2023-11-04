"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postArduinoController = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
function postArduinoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const fileData = yield promises_1.default.readFile(path_1.default.join(__dirname, "../../data.json"), "utf-8");
        const arr = JSON.parse(fileData);
        let triger = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === data.name) {
                arr[i] = data;
                triger = false;
                break;
            }
        }
        if (triger) {
            arr.push(data);
        }
        yield promises_1.default.writeFile(path_1.default.join(__dirname, "../../data.json"), JSON.stringify(arr));
        res.status(200).json("OK");
    });
}
exports.postArduinoController = postArduinoController;
