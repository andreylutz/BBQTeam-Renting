const adminRouter = require('express').Router();
const getAllProperties = require('../../controllers/propertyController');

adminRouter.get('/properties', getAllProperties);

module.exports = adminRouter;
