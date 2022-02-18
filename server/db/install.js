require('../config/config');
const colors = require('colors');
const Admin = require('./tablas/Admin');
const Cliente = require('./tablas/Cliente');
const Pago = require('./tablas/Pago');
const Plan = require('./tablas/Plan');
const Trabajador = require('./tablas/Trabajador');

const drop = async () => {
  console.log('\nPaso 1) Desinstalando la db.'.bold.blue);

  await Pago.drop();
  console.log('La tabla Pago se desinstalo correctamente.'.magenta);
  await Trabajador.drop();
  console.log('La tabla Trabajador se desinstalo correctamente.'.magenta);
  await Cliente.drop();
  console.log('La tabla Cliente se desinstalo correctamente.'.magenta);
  await Admin.drop();
  console.log('La tabla Admin se desinstalo correctamente.'.magenta);
  await Plan.drop();
  console.log('La tabla Plan se desinstalo correctamente.'.magenta);
};

const sync = async () => {
  console.log('\nPaso 2) Instalando la db.'.bold.blue);

  await Plan.sync();
  console.log('La tabla Plan se instalo correctamente.'.magenta);
  await Admin.sync();
  console.log('La tabla Admin se instalo correctamente.'.magenta);
  await Cliente.sync();
  console.log('La tabla Cliente se instalo correctamente.'.magenta);
  await Trabajador.sync();
  console.log('La tabla Plan se instalo correctamente.'.magenta);
  await Pago.sync();
  console.log('La tabla Plan se instalo correctamente.'.magenta);
};


const exe = async () => {
  await drop();
  await sync();
  console.log(
    '\nSe ha instalado exitosamente la base de datos.\n'.underline.bold.green
  );

  process.exit();
};

exe();
