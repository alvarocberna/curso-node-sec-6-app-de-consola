
//Veremos como imprimir los argumentos de sistema de forma tradicional y con yargs

//1) Sin yargs

//1.1 podemos imprimir todos los argumentos del sistema

console.log('tradicional, todos los argumentos: ', process.argv);

//1.2 podemos hacer destructuring e imprimir solo los argumentos que nos interesan

const [tsnode, app, ...args] = process.argv;

console.log('tradicional, con destructuring: ', args);

//2) Con yargs

import { yarg } from './config/plugins/yargs.plugin';

console.log('con yargs: ', yarg);
