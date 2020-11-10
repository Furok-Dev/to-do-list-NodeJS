//imports
const argv = require('./config/yargs').argv;
const tareas = require('./controller/tareas');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = tareas.crearTarea(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    console.log('====================================');
    console.log('=======TAREAS POR HACER=============');
    console.log('====================================');
    let listado = tareas.getLista();
    for (let tarea of listado) {
      console.log('-------------------------------');
      console.log(`Descripcion: ${tarea.descripcion}`);
      console.log(`Completado: ${tarea.completado}`);
    }
    break;
  case 'actualizar':
    let respuesta = tareas.actualizar(argv.descripcion, argv.completado);
    console.log(respuesta);
    break;
  case 'eliminar':
    let eliminado = tareas.eliminar(argv.descripcion);
    console.log(eliminado);
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
