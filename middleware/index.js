const bodyParser = require('koa-bodyparser');
const path = require('path');
const staticFile = require('koa-static');
const koaJson = require('./koa-json');
const filter = require('./filter');

module.exports = app=>{
    app.use(staticFile(path.join( __dirname,  '../public')));
    app.use(bodyParser());
    app.use(koaJson);
    app.use(filter);
}