const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();
const { Property } = require('../../db/models');

const Home = require('../../views/Home');

homeRouter.route('/')
  .get(async (req, res) => {
    const properties = await Property.findAll(
      { include: [Property.Type] },
    );
    console.log(properties);
    const homePage = React.createElement(Home, { properties });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(homePage);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  });

module.exports = homeRouter;
