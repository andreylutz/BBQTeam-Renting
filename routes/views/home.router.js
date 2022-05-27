const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();

const Home = require('../../views/Home');
const { PropertyType } = require('../../db/models');

homeRouter.route('/')
  .get(async (req, res) => {
    const arrTypes = await PropertyType.findAll({ });

    const homePage = React.createElement(Home, { arrTypes });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(homePage);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  });

module.exports = homeRouter;
