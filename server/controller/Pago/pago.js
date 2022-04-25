const helperPath = '../../helper';
const {validarId} = require(`${helperPath}/validar`);
const Pago = require('../../db/tablas/Pago');
const Plan = require('../../db/tablas/Plan');

const pago = async (query) => {
  const idPago = validarId(query.idPago)
  return Pago.findOne({ where: { idPago }, include: [{model: Plan}] }).then(res => {
    if(!res) throw new Error("No se ha encontrado un cliente con ese id.")
    console.log(res)
    return res.dataValues;
  })
}

module.exports = pago;
