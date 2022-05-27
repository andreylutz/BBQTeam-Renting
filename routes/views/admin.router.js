const adminRouter = require('express').Router();
const { getAllProperties, getProperty, editProperty } = require('../../controllers/propertyController');

adminRouter.get('/properties', getAllProperties);

adminRouter.get('/properties/:id', getProperty);

adminRouter.post('/properties', editProperty);

module.exports = adminRouter;
