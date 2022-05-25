const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.hasMany(models.ContactType, { foreignkey: 'contactID' });
      Contact.hasMany(models.User, { foreignkey: 'userId' });
    }
  }
  Contact.init({
    contactId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};
