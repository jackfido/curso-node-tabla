import { writeFileSync } from 'node:fs';
import colors from 'colors';

export const crearArchivo = async(base = 0, to = 0, list = false) => {
    try {
        let salida = '', consola = '';

        for (let index = 1; index <= to; index++) {
            consola += `${ base } x ${index} = ${base*index}\n`;
            salida += `${ (base + '').red} ${'x'.yellow} ${index} ${'='.yellow} ${((base*index)+'').green}\n`;
        }
    
        if (list) {
            console.log('############');
            console.log(`TABLE OF ${base} TO ${to}`.yellow);
            console.log('############');
            console.log(salida);
        }

        writeFileSync(`./output/table-${base}.txt`, consola);
        return `The file "table-${base}.txt" has been saved!`;
    } catch (err) {
        throw `Error ${err} al guardar el archivo: "table-${base}.txt".`;
    }
};