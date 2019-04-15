const path = require('path');
const cors = require('@koa/cors');
const koaJson = require('./koa-json');
const filter = require('./filter');
const koaBody = require('./koa-upload');

module.exports = app=>{
    app.use(cors());
    app.use(koaBody);
    app.use(koaJson);
    app.use(filter);
}