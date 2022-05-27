const adminRouter = require('express').Router();
const {
  getAllProperties, getProperty, editProperty, deleteProperty,
} = require('../../controllers/propertyController');

adminRouter.get('/properties', getAllProperties);

adminRouter.get('/properties/:id', getProperty);

adminRouter.post('/properties', editProperty);

adminRouter.delete('/properties/:id', deleteProperty);

module.exports = adminRouter;
