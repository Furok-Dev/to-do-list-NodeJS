//imports
const argv = require('./config/yargs').argv;
const tareas = require('./controller/tareas');
const mensajes = require('./config/colorsConf');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = tareas.crearTarea(argv.descripcion);
    if (tarea) {
      console.log('======TAREA CREADA======'.warn);
      console.log(`Descripcion: ${tarea.descripcion}`.success);
      console.log(`Completado: ${tarea.completado}`.success);
    } else {
    }
    break;
  case 'listar':
    console.log('===================================='.info);
    console.log('=======TAREAS POR HACER============='.info);
    console.log('===================================='.info);
    let listado = tareas.getLista();
    for (let tarea of listado) {
      console.log('-----------------------------------'.success);
      console.log('Descripcion: '.warn + tarea.descripcion);
      console.log(
        'Estado: '.warn +
          (tarea.completado ? 'Completado'.success : 'No completado'.error)
      );
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
