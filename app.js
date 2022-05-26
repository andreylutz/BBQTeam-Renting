require('@babel/register');
const express = require('express');
const { sequelize } = require('./db/models');

const app = express();
const mainConfig = require('./config/config');

mainConfig(app);

const homePage = require('./routes/views/home.router');

const PORT = process.env.PORT ?? 3000;

app.use('/', homePage);

app.listen(PORT, async () => {
  console.log(`server started at ${PORT} port`);
  try {
    await sequelize.authenticate();
    console.log('Connected to database');
  } catch (error) {
    console.log(`Failed to connect to db: ${error.message}`);
  }
});
