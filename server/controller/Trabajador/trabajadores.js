const Trabajador = require('../../db/tablas/Trabajador');

const trabajadores = () => Trabajador.findAll();

module.exports = trabajadores;