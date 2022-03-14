const helperPath = '../../helper';
const {validar, validarCorreo, validarFecha} = require(`${helperPath}/validar`);
const dbPath = '../../db/tablas';
const Cliente = require(`${dbPath}/Cliente`);

const nuevo = async (body) => {
  const nombre = validar(body.nombre, 'el nombre');
  const fechaNacimiento = validarFecha(body.fechaNacimiento);
  const fechaUltimoPago = body.fechaUltimoPago;
  const fechaProximoPago = body.fechaProximoPago;
  const telefono = validar(body.telefono, 'El teléfono');
  const telefonoEmergencia = validar(body.telefonoEmergencia);
  const correo = validarCorreo(body.correo);
  const tipoSangre = validar(body.tipoSangre);

  return Cliente.create({
    nombre,
    fechaNacimiento,
    fechaUltimoPago,
    fechaProximoPago,
    telefono,
    telefonoEmergencia,
    tipoSangre,
    correo
  })
    .then((res) => {
      if (!res) throw new Error('No se ha podido instalar el cliente en la db.');
    })
    .then((res) => ({
      message: `Se registró correctamente el cliente.`,
    }));
};

module.exports = nuevo;
