const baseRouter = require('./base');

module.exports = app =>{
    app
        .use(baseRouter.routes())
        .use(baseRouter.allowedMethods())
}