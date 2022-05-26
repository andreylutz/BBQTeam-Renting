const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PropertyType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // PropertyType has many properties
      PropertyType.hasMany(models.Property, { foreignKey: 'typeId' });
    }
  }
  PropertyType.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PropertyType',
  });
  return PropertyType;
};
