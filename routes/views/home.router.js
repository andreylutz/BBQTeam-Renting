const ReactDOMServer = require('react-dom/server');
const React = require('react');
const homeRouter = require('express').Router();

const Home = require('../../views/Home');

homeRouter.route('/')
  .get((req, res) => {
    const homePage = React.createElement(Home, { });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(homePage);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  });

module.exports = homeRouter;
