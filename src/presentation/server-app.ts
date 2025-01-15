
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOption {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {

    static run({ base, limit, showTable, name, destination }: RunOption) {

        console.log('aplicación corriendo');

        const table = new CreateTable().execute({ base, limit })

        // console.log(table);

        const Save = new SaveFile().execute({ fileContent: table, fileName: name, filePath: destination })

    }
}