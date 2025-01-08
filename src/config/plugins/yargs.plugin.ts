
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; //oculta el bin folder, es decir no imprime la ruta del archivo ejecutado
//Forma tradicional con node para importar dependencias:
// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

export const yarg = yargs(hideBin(process.argv))
    .parseSync()