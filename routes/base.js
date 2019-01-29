const router = require('koa-router')();
const  { userController,baseController } =  require('../controllers/index');

router 
  .get('/api/test',baseController.test)
  .post('/api/upload',baseController.upload)

module.exports = router;