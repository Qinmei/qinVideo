const Koa = require('koa');
const router = require('./routes/index');
const middleware = require('./middleware/index')
const multer = require('koa-multer');
const db = require('./models/connect');

const app = new Koa();

middleware(app);
router(app);

app.listen(3000)