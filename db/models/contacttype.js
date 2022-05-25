'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactType.init({
    name: DataTypes.STRING,
    days: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContactType',
  });
  return ContactType;
};