
console.clear();
const { number, demandOption, option } = require("yargs");
const {crearArchivo} = require("./helpers/multiplicar.js");
const argv = require('./config/yargs.js');
//const base = 10;

/* 
tomar argumentos desde linea de comandos, tiene una limitación y es que el usuario debe ingresar los datos en orden, de lo contrario no seran tomados bien los datos.

Codigo:
const [,,arg]=process.argv
const [,base=1] = arg.split('='); 
*/


crearArchivo(argv)
    .then((msg)=>{console.log(`${msg} creado correctamente`)})
    .catch((error)=>{console.log(`ERROR${error}`)})