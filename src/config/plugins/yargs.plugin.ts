
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; //oculta el bin folder, es decir no imprime la ruta del archivo ejecutado
//Forma tradicional con node para importar dependencias:
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv


//Sin hideBin
export const yargSinHideBin = yargs(process.argv)
    .parseSync()

//Con hideBin
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multi-table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((argv, option) => {
        // console.log({ argv, option });
        if (argv.b < 1) throw 'Erro: base must be greater than 0';
        return true;
    })
    .parseSync()