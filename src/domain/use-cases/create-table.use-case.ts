
interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        //permite la dependency injection al declaralo 
    ) { }

    //{base, limit}
    execute({ base, limit }: CreateTableOptions): string {

        let outputMessage = '';

        // const header: string = `
        //         ==============================
        //                 Tabla del ${base}
        //         ==============================
        //     `

        // outputMessage += header;

        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return outputMessage;
    };

};