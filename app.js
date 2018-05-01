const argv = require('./config/yargs').argv;
const {
    createWork,
    toList
} = require('./toDo/toDo')

let comando = argv._[0];


switch (comando) {

    case 'crear':
        createWork(argv.descripcion);

        break;

    case 'listar':
        let works = toList()
        for (let work of works) {
            console.log('-----------------------')
            console.log('Titulo:', work.descripcion);
            console.log('Estado: ', work.estado);
            console.log('-----------------------')
        }
        break;

    case 'actualizar':
        console.log('Actualizar cosas por hacer')
        break;

}