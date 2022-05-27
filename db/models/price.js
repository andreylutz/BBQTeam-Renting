const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Prices have many types and property types
      Price.hasMany(models.PriceType, { foreignkey: 'priceTypeID' });
      // Price.hasMany(models.Property, { foreignKey: 'propertyId', onDelete: 'CASCADE' });
    }
  }
  Price.init({
    priceTypeId: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};
