const Pago = require('../../db/tablas/Pago');
const Plan = require('../../db/tablas/Plan');

const pagos = () => Pago.findAll({include: [{model:Plan}]});

module.exports = pagos;