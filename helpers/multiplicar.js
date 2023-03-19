const fs = require('fs');
const colors = require('colors');
const crearArchivo= async({base,listar,hasta})=>{
    try {
        let salida =`============= \nTabla del ${base} \n============= \n`;
        let salidaConsola =`============= \nTabla del ${colors.green(base)} \n============= \n`;
        for (let index = 1; index <= hasta; index++) {
            salida+=`${base}*${index} = ${base*index}\n`;
            salidaConsola+=`${colors.green(base)}*${colors.yellow(index)} = ${base*index}\n`;
            //salida+= colors.green(base)+'*'+colors.yellow(index)+'='+base*index+'\n';
        }

        if (listar){console.log(salidaConsola)}
        
        fs.writeFileSync(`./Salida/TablaDel${base}Hasta${hasta}.txt`, salida);
        return `Tabladel${base}.txt`;
    }catch(error) {
        throw error;
    }

}
module.exports={
    crearArchivo
};