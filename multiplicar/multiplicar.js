//Colocar aquí todos los requires.
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise (( resolve, reject ) => {

        console.log('============================'.green);
        console.log(`   =====Tabla del ${base}======`.green);
        console.log('============================'.green);


        if (!Number(base)) {
            reject(`El valor introducido en la base ( ${base} ) no es un numero `.red)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(data);
    })

}


let crearArchivo = ( base, limite = 10 ) => {

    return new Promise ( (resolve, reject) => {

        if(!Number( base )){
            reject(`El valor introducido en la base ( ${base} ) no es un numero `.red)
            return;
        }

        if(!Number(limite)) {
            reject(`El valor introducido en el límite ( ${limite} ) no es un numero `.red)
            return;
        }

    let data = '';

    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        let data = '';
        if (err) 
            reject (err);
        else
            resolve(`tabla-${base}-al-${limite}.txt`.magenta)


    });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}

