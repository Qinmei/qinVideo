const Koa = require("koa");
const router = require("./rest/routes/index");
const db = require("./rest/models/connect");
const middleware = require("./rest/middleware/index");
const timeJob = require("./rest/utils/timeJob");
const init = require("./rest/utils/init");

const app = new Koa();

middleware(app);
router(app);

timeJob();
init();

app.listen(9000);
