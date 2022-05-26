const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.hasMany(models.PropertyType, { foreignKey: 'propertyId', onDelete: 'CASCADE' });
      Property.hasMany(models.Price, { foreignKey: 'propertyId' });
    }
  }
  Property.init({
    typeId: DataTypes.INTEGER,
    rentalPrice: DataTypes.INTEGER,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
