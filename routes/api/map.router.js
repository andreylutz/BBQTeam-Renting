const mapRouter = require('express').Router();
const { Op } = require('sequelize');
const { Property } = require('../../db/models');

// /api/map

// let typeIds;

mapRouter.route('/')
  .get(async (req, res) => {
    const { checBoxIdArr } = req.body;
    
    const typeIds = Object.keys(req.query);
    console.log('====>', typeIds);

    const arrAdresses = await Property.findAll({
      where: { typeId: { [Op.or]: typeIds } },
      attributes: ['address', 'description', 'rentalPrice'],
    });

    res.json({ arrAdresses });
  });

module.exports = mapRouter;
