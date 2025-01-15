
// import './1-tabla-5';
// import './2-yargs';
// import './3-tabla-yargs';
import { ServerApp } from "./presentation/server-app";
import { CreateTable } from "./domain/use-cases/create-table.use-case";
import { yarg } from "./config/plugins/yargs.plugin";

//fn anonima autoinvocada asincrona
(async () => {
    await main();
})();

async function main() {

    const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;

    ServerApp.run({ base, limit, showTable, name, destination });

}