const colors = require('colors');
const argv = require("yargs")
  /*                   .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption: true
                    }) */
                    .options({
                        'b': {
                          alias: 'base',
                          demandOption: true,
                          type: 'number',
                          describe: 'Se eligue la base de la tabla',
                        },
                        'l':{
                            alias:"listar",
                            default:false,
                            type:'boolean',
                            describe: 'Muestra la tabla en consola'
                        },
                        'h':{
                            alias:'hasta',
                            describe:'Numero hasta al que se quiere multiplicar',
                            type:'number',
                            default:10
                        }
                      })

                
                    .check((argv,option)=>{
                        //console.log('yargs validation',argv);
                        if(isNaN(argv.b)){
                            throw colors.red('La base tiene que ser un numero');
                        }
                        return true;
                    })
                    .argv;
module.exports = argv;
