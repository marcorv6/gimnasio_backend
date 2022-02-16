const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');

class Usuario extends Model {}
Usuario.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false,
  }
);

module.exports = Usuario;
