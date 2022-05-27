const { Property, PropertyType } = require('../db/models');
const PropListPage = require('../views/PropListPage');
const EditPropertyPage = require('../views/EditPropertyPage');

async function getAllProperties(req, res) {
  let properties;
  try {
    properties = await Property.findAll(
      { include: [Property.Type] },
    );
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
    return;
  }

  res.renderComponent(PropListPage, {
    properties,
    user: req.session.user,
  });
}

async function getProperty(req, res) {
  let property;
  let propertyTypes;
  try {
    property = await Property.findByPk(
      req.params.id,
      { include: [Property.Type] },
    );
    propertyTypes = await PropertyType.findAll();
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
    return;
  }

  res.renderComponent(EditPropertyPage, {
    property,
    propertyTypes,
    user: req.session.user,
  });
}

async function editProperty(req, res) {
  const {
    desc,
    photo,
    price,
    propId,
  } = req.body;

  const property = await Property.findByPk(propId);
  console.log(property);
  await property.update({
    description: desc,
    photo,
    rentalPrice: price,
  });
  // await property.save();

  console.log(desc, photo, price, propId);
  res.redirect('/admin/properties');
}

module.exports = {
  getAllProperties,
  getProperty,
  editProperty,
};
