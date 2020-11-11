//imports
const argv = require('./config/yargs').argv;
const tareas = require('./controller/tareas');
const mensajes = require('./config/colorsConf');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = tareas.crearTarea(argv.descripcion);
    console.log('======TAREA CREADA======'.warn);
    console.log('Descripcion: '.warn + tarea.descripcion);
    console.log(
      'Estado: '.warn +
        (tarea.completado ? 'Completado'.success : 'No completado'.error)
    );

    break;
  case 'listar':
    console.log('===================================='.info);
    console.log('=======TAREAS POR HACER============='.info);
    console.log('===================================='.info);
    let listado = tareas.getLista();
    let valor = Object.entries(listado).length === 0; //validacion para ver si tenemos tareas o no
    // console.log(valor);
    if (valor) {
      console.log('NO TIENES TAREAS AUN'.warn);
      console.log('PUEDES CREAR UNA TAREA :)'.help);
    } else {
      for (let tarea of listado) {
        console.log('-----------------------------------'.success);
        console.log('Descripcion: '.warn + tarea.descripcion);
        console.log(
          'Estado: '.warn +
            (tarea.completado ? 'Completado'.success : 'No completado'.error)
        );
      }
    }

    break;
  case 'actualizar':
    let respuesta = tareas.actualizar(argv.descripcion, argv.completado);
    console.log(
      respuesta ? 'La tarea se actualizo'.success : 'La tarea no existe'.error
    );
    break;
  case 'eliminar':
    let eliminado = tareas.eliminar(argv.descripcion);
    eliminado
      ? console.log('Tarea eliminada'.warn)
      : console.log('La tarea no existe'.error);
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
