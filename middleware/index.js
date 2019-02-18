const bodyParser = require('koa-bodyparser');
const staticFile = require('koa-static');
const koaJson = require('./koa-json');
const filter = require('./filter');

module.exports = app=>{
    app.use(staticFile(__dirname + '/public'));
    app.use(bodyParser());
    app.use(koaJson);
    app.use(filter);
}