const moment = require('moment');
const { validarId } = require(`../../helper/validar`);
const { validarNumero } = require('../../helper/validar');
const Pago = require('../../db/tablas/Pago');
const Cliente = require('../../db/tablas/Cliente');
const Trabajador = require('../../db/tablas/Trabajador');
const Plan = require('../../db/tablas/Plan');

const nuevo = async (body) => {
  const idCliente = validarId(body.idCliente);
  const idPlan = validarId(body.idPlan);
  const idTrabajador = validarId(body.idTrabajador);
  const cantidad = validarNumero(body.cantidad);
  const monto = validarNumero(body.monto);
  let idPago = null

  return Cliente.findOne({ where: { idCliente } })
    .then((res) => {
      if (!res) throw new Error('No se ha encontrado un cliente con ese id.');
      return Trabajador.findOne({ where: { idTrabajador } });
    })
    .then((res) => {
      if (!res)
        throw new Error('No se ha encontrado un trabajador con ese id.');
      return Plan.findOne({ where: { idPlan } });
    })
    .then((res) => {
      if (!res) throw new Error('No se ha encontrado un plan con ese id.');
      const fecha = moment();
      return Pago.create({
        idCliente,
        idTrabajador,
        idPlan,
        monto,
        cantidad,
        fechaPago: fecha,
      });
    })
    .then(async (res) => {
      idPago = res.idPago
      res.folio = `pyr-${res.idPago}`;
      return res.save();
    })
    .then((res) => {
      let letra = null
      if(idPlan === 1) letra = 'w'
      if(idPlan === 2) letra = 'M'
      if(idPlan === 3) letra = 'y'
      let fechaProximoPago = moment().add(cantidad, letra);
      Cliente.findOne({ where: { idCliente } }).then(async (res) => {
        res.fechaUltimoPago = moment();
        if(!res.fechaProximoPago) res.fechaProximoPago = fechaProximoPago;
        if(moment(fechaProximoPago).isAfter(moment)) res.fechaProximoPago = fechaProximoPago;
        res.fechaProximoPago = moment(res.fechaProximoPago).add(cantidad, letra)
        return res.save();
      });
    })
    .then(res => {
      return Pago.findOne({where: idPago})
    })
    .then((res) => ({
      message: `Se resgistró correctamente este pago.`,
      data: res
    }));
};

module.exports = nuevo;
