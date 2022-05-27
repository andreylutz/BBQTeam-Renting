const adminRouter = require('express').Router();
const { getAllProperties, getProperty } = require('../../controllers/propertyController');

adminRouter.get('/properties', getAllProperties);

adminRouter.get('/properties/:id', getProperty);

adminRouter.patch('properties/:id');

module.exports = adminRouter;
