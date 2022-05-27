require('@babel/register');
const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const mainConfig = require('./config/config');

mainConfig(app);

const homePage = require('./routes/views/home.router');
const mapRouter = require('./routes/api/map.router');
const authPage = require('./routes/views/auth.router');
const adminRouter = require('./routes/views/admin.router');

const PORT = process.env.PORT ?? 3000;

app.use(ssr);

app.use('/', homePage);
app.use('/api/map', mapRouter);
app.use('/auth', authPage);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`server started at ${PORT} port`));
