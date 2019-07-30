//Colocar aqui todos los requires.
const fs = require('fs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require ('./config/yargs').argv;
const colors = require('colors');


// let param = argv[2];
// let base = param.split('=')[1]

let comando = argv._[0];

// console.log(argv);

switch ( comando ) {


       case 'listar':
              listarTabla(argv.base, argv.limite);
              break
 
       case 'crear':
              crearArchivo(argv.base, argv.limite)
                     .then(archivo => console.log(`Archivo creado ${archivo}`.green))
                     .catch(e => console.log(e));
              break
       case 'default':
              console.log('comando no reconocido'.red);
              break
       
}


// console.log(JSON.stringify(argv.base, null, 2));


