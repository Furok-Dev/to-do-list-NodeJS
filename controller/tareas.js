/**
 * Controlador para la app
 */

const fs = require('fs');

let tareasPorHacer = [];

const guardarDatos = () => {
  let data = JSON.stringify(tareasPorHacer);
  fs.writeFile('./model/data.json', data, (error) => {
    if (error) {
      console.error(new Error('Datos no actualizados'));
    } else {
      console.log('Datos guardados');
    }
  });
};

const leerDatos = () => {
  try {
    tareasPorHacer = require('../model/data.json');
  } catch (error) {
    tareasPorHacer = [];
  }
  console.log(tareasPorHacer);
};

const getLista = () => {
  leerDatos();
  return tareasPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  leerDatos();
  let indice = tareasPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (indice !== -1) {
    tareasPorHacer[indice].completado = completado;
    guardarDatos();
    return true;
  }
  return false;
};

const eliminar = (descripcion) => {
  leerDatos();
  let indexBorrar = tareasPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (indexBorrar !== -1) {
    tareasPorHacer.splice(indexBorrar, 1);
    guardarDatos();
    return true;
  }

  return false;
};

const crearTarea = (descripcion) => {
  leerDatos();

  let tarea = {
    descripcion,
    completado: false,
  };
  tareasPorHacer.push(tarea);
  guardarDatos();
  return tarea;
};

module.exports = { crearTarea, getLista, actualizar, eliminar };
