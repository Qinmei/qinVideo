const Koa = require('koa');
const router = require('./rest/routes/index');
const db = require('./rest/models/connect');
const middleware = require('./rest/middleware/index')
const timeJob = require('./rest/utils/timeJob');

const app = new Koa();

middleware(app);
router(app);

timeJob();

app.listen(9000)