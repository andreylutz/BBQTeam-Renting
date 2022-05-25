const bcrypt = require('bcrypt');// НЕ РАБОТАЕТ С bcrypt
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const authRouter = require('express').Router();
const { User } = require('../../db/models');

const Signup = require('../../views/Signup');

authRouter.route('/signup')
  .get((req, res) => {
    const signupPage = React.createElement(Signup, { });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(signupPage);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  })
  .post(async (req, res) => {
    const name = req.body.username;
    const mail = req.body.email;
    const pass = await bcrypt.hash(req.body.psw, 5);
    const admin = false;
    await User.create({
      userName: name, userEmail: mail, userPassword: pass, isAdmin: admin,
    });
    res.redirect('/signup');// поменяй путь
  });

module.exports = authRouter;
