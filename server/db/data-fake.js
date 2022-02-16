const Usuario = require('./tablas/Usuario');
const { encriptar } = require('../helper/encriptar');

const dataUsuarios = async () => {
  let usuario = ['416313221', '111111111', '222222222'];

  for (let i = 0; i < usuario.length; i++) {
    await Usuario.create({
      usuario: usuario[i],
      password: encriptar('holi'),
    });
    console.log(`Se insertó el usuario ${usuario[i]}.`.magenta);
  }
};

const exec = async () => {
  await dataUsuarios();
  console.log(
    '\nSe ha instalado exitosamente la información falsa en la base de datos.\n'
      .underline.bold.green
  );
  process.exit();
};

exec();
