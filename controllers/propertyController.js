const { Property } = require('../db/models')

async function getAllProperties(req, res) {
  let properties;
  try {
    properties = await Property.findAll();
  } catch(error) {
    res.status(500);
    res.json({error: error.message});
    return;
  }

  res.renderComponent(PropListPage, {
    properties,
    user: req.session.user,
  })
}
