/**
 * Comandos de la app:
 * -crear -d "ir a pasear"
 * -listar
 * -actualizar -d "ir a pasear " -c true
 *
 */

const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descipcion de una tarea',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completada o pendiente una tarea',
};

const argv = require('yargs')
  .command('crear', 'Crea una nueva tarea', { descripcion })
  .command('eliminar', 'Elimina una tarea', { descripcion })
  .command('actualizar', 'Actualiza el estado de una tarea a completado ', {
    descripcion,
    completado,
  })
  .help().argv;

module.exports = {
  argv,
};
