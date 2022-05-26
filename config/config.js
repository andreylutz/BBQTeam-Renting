const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'leopards',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // maxAge: 1000 * 60 * 60 * 12,
    maxAge: 1000,
    httpOnly: true,
  },
};

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(session(sessionConfig));
  app.use(express.static(path.join(process.env.PWD, 'public')));
};

module.exports = config;
