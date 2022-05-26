require('@babel/register');
const express = require('express');

const app = express();
const mainConfig = require('./config/config');

mainConfig(app);

const homePage = require('./routes/views/home.router');
const mapRouter = require('./routes/api/map.router');

const PORT = process.env.PORT ?? 3000;

app.use('/', homePage);
app.use('/api/map', mapRouter);


app.listen(PORT, () => console.log(`server started at ${PORT} port`));
