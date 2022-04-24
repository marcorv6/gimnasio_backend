const Pago = require('../../db/tablas/Pago');

const pagos = () => Pago.findAll();

module.exports = pagos;