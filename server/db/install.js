require('../config/config');
const colors = require('colors');
const Usuario = require('./tablas/Usuario');

const drop = async () => {
  console.log('\nPaso 1) Desinstalando la db.'.bold.blue);

  await Usuario.drop();
  console.log('La tabla Usuario se desinstalo correctamente.'.magenta);
};

const sync = async () => {
  console.log('\nPaso 2) Instalando la db.'.bold.blue);

  await Usuario.sync();
  console.log('La tabla Usuario se instalo correctamente.'.magenta);
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
