const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const estado = {
    default: true,
    alias: 'c',
    desc: 'Permite cambiar el estado de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Nos permitira crear un tarea ', {
        descripcion
    })

.command('actualizar', 'Nos permitira actualizar nuestra lista de tareas', {
        descripcion,
        estado

    })
    .command('listar', 'Nos permite listar todas las tareas')

.command('borrar', 'Nos sirve para borrar una tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}