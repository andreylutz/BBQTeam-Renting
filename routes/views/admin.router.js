const adminRouter = require('express').Router();
const getAllProperties = require('../../controllers/propertyController');

adminRouter.get('/properties', getAllProperties);

// adminRouter.get('/properties/:id', getProperty);

module.exports = adminRouter;
