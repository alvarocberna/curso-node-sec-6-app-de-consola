import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';
const { b: base, l: limit, s: show } = yarg;

let message: string = '';

const num: number = base;

const lim: number = limit;

const header: string = `
    ==============================
            Tabla del ${num}
    ==============================
`
message += header;

for (let i = 1; i <= lim; i++) {
    message += `${num} x ${i} = ${num * i}\n`;
}

if (show) {
    console.log(message);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${num}.txt`, message)
