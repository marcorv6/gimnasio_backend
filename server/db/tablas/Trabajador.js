const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');
const Admin = require("./Admin")

class Trabajador extends Model {}
Trabajador.init(
  {
    idTrabajador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaUltimaActualizacion: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    usuario: {
      type: DataTypes.STRING(25),
      defaultValue: null,
    },
    password: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: 'Trabajador',
    tableName: 'trabajador',
    timestamps: false,
  }
);

Trabajador.belongsTo(Admin, {
  foreignKey: {
    name: 'idAdmin',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Trabajador;
