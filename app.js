require('@babel/register');
const express = require('express');

const app = express();
const mainConfig = require('./config/config');

mainConfig(app);

const homePage = require('./routes/views/home.router');
const authPage = require('./routes/views/auth.router');

const PORT = process.env.PORT ?? 3000;

app.use('/', homePage);
app.use('/auth', authPage);

app.listen(PORT, () => console.log(`server started at ${PORT} port`));
