const commandOpts = {
    base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', commandOpts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', commandOpts)
    .help()
    .argv;


module.exports = {
    argv
}