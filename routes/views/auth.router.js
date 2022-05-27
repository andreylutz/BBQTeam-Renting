const bcrypt = require('bcrypt');// НЕ РАБОТАЕТ С bcrypt
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const authRouter = require('express').Router();
const express = require('express');
const { User } = require('../../db/models');
const config = require('../../config/config');

const Signup = require('../../views/Signup');
const Signin = require('../../views/Signin');
// регистрация
authRouter.route('/signup')
  .get((req, res) => {
    const signupPage = React.createElement(Signup, { });
    const htmlSignup = ReactDOMServer.renderToStaticMarkup(signupPage);
    res.write('<!DOCTYPE html>');
    res.end(htmlSignup);
  })
  .post(async (req, res) => {
    const name = req.body.username;
    const mail = req.body.email;
    const pass = await bcrypt.hash(req.body.psw, 5);
    const admin = false;
    // if (User.userName || User.userEmail) {
    //   res.send({ message: 'uzer done' });
    // } else {
    try {
      const user = await User.create({
        userName: name, userEmail: mail, userPassword: pass, isAdmin: admin,
      });
      req.session.user = user;
      res.redirect('/');
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
  });
// авторизация
authRouter.route('/signin')
  .get((req, res) => {
    const signinPage = React.createElement(Signin, { });
    const htmlSignin = ReactDOMServer.renderToStaticMarkup(signinPage);
    res.write('<!DOCTYPE html>');
    res.end(htmlSignin);
  })
  .post(async (req, res) => {
    let user;
    try {
      user = await User.findOne({
        where: { userEmail: req.body.email },
      });
    } catch (error) {
      res
        .status(500)
        .json({
          message: error.message,
        });
    }

    if (!user) {
      res
        .status(404)
        .json({ message: 'Имя пользователя или пароль не верный' });
      return;
    }

    let isSame;
    try {
      isSame = await bcrypt.compare(req.body.password, user.userPassword);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }

    if (!isSame) {
      res
        .status(404)
        .json({ message: 'Имя пользователя или пароль не верный' });
      return;
    }
    req.session.user = user;
    res.redirect('/');
  });

authRouter.route('/signout')
  .get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res
        .clearCookie('sid')
        .redirect('/auth/signin');
    });
  });
module.exports = authRouter;
