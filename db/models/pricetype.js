const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PriceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // priceType has many prices as daily/nigtly/weekly rate might differ for different poropety
      PriceType.hasMany(models.Price, { foreignKey: 'priceTypeId' });
    }
  }
  PriceType.init({
    name: DataTypes.STRING,
    days: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PriceType',
  });
  return PriceType;
};
