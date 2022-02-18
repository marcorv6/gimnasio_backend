const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');

class Admin extends Model {}
Admin.init(
  {
    idAdmin: {
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
    modelName: 'Admin',
    tableName: 'admin',
    timestamps: false,
  }
);

module.exports = Admin;
