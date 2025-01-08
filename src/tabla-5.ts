import fs from 'fs';

let message: string = '';

const num: number = 5;

const header: string = `
    ==============================
            Tabla del ${num}
    ==============================
`
message += header;

for (let i = 1; i <= 9; i++) {
    message += `${num} x ${i} = ${num * i}\n`;
}

console.log(message);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${num}.txt`, message)
