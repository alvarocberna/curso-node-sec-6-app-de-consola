"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let message = '';
const num = 5;
const header = `
    ==============================
            Tabla del ${num}
    ==============================
`;
message += header;
for (let i = 1; i <= 9; i++) {
    message += `${num} x ${i} = ${num * i}\n`;
}
console.log(message);
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${num}.txt`, message);
