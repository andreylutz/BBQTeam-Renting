require('@babel/register');
const express = require('express');
ssr = require('./middleware/ssr');

const app = express();
const mainConfig = require('./config/config');

mainConfig(app);

const homePage = require('./routes/views/home.router');

const PORT = process.env.PORT ?? 3000;

app.use(ssr);

app.use('/', homePage);

app.listen(PORT, () => console.log(`server started at ${PORT} port`));
