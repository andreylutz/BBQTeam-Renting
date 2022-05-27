const mapRouter = require('express').Router();
const { Property } = require('../../db/models');

// /api/map
mapRouter.route('/')
  .get(async (req, res) => {
    const arrAdresses = await Property.findAll({ attributes: ['address', 'description', 'rentalPrice'] });
    res.json({ arrAdresses });
  })
  .post((req, res) => {
    
  })

module.exports = mapRouter;
