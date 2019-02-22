const staticFile = require('koa-static');
const path = require('path');
const koaJson = require('./koa-json');
const filter = require('./filter');
const koaBody = require('./koa-upload');

module.exports = app=>{
    app.use(staticFile(path.join( __dirname,  '../public')));
    app.use(koaBody);
    app.use(koaJson);
    app.use(filter);
}