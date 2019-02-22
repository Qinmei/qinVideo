const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { MD5 } = require('../middleware/common');
const {
    UserModel,
  } = require('../models/index');
const config = require('../config');

class baseController {
  
    // 登录
    static async login(ctx) {
      const {name,password} = ctx.request.body;
      const nameResult = await UserModel.findOne({name});
      const passwordResult = password === nameResult.password;
      if(!nameResult){
        return ctx.error({msg:'用户名错误'});
      } 
      if(!passwordResult){
        return ctx.error({msg:'密码错误'});
      }

      const { _id,
              email,
              level,
              score,
              avatar,
              background,
              introduce
            } = nameResult;

      const token = jwt.sign(
        {id:_id,name,email,level,score,avatar,background,introduce},
        config.token.secret, 
        { expiresIn: config.token.expired }
      );
      
      ctx.success({ data:{token}} );
    }

    // 注册
    static async register(ctx) {
      const {name,email,password} = ctx.request.body;
      const refreshToken = MD5(new mongoose.Types.ObjectId().toString());
      const data = await UserModel.create({name,password,email,refreshToken}).catch(err=>{return {code:404,msg:err.message}});
      ctx.send({ data} );
    }

    // 刷新token
    static async refreshtoken(ctx) {
      const {name,refreshToken} = ctx.request.body;
      const nameResult = await UserModel.findOne({name,refreshToken});
      const { _id,
              email,
              level,
              score,
              avatar,
              background,
              introduce
            } = nameResult;
      const token = jwt.sign(
        {id:_id,name,email,level,score,avatar,background,introduce},
        config.token.secret, 
        { expiresIn: config.token.expired }
      );
      
      ctx.success({data:{name,token},msg:'刷新成功'})
    }

    // 上传文件
    static async upload(ctx) {
      const result = [];
      const { file }= ctx.request.files;
      const { type } = ctx.request.body;
      const dirPath = path.join(__dirname, '../public') + `/${type}`;
      !fs.existsSync(dirPath) && await fs.mkdirSync(dirPath);

      async function saveFile(file){
        const fileName = MD5(file.name.split('.')[0]);
        const fileExt = file.name.split('.').pop();
        const name = `${fileName}.${fileExt}`;
        const oldPath = file.path;
        const reader = await fs.createReadStream(file.path);
        const upStream = await fs.createWriteStream(dirPath + `/${name}`);
        await reader.pipe(upStream);
        fs.exists(oldPath,()=>{
          fs.unlinkSync(oldPath);
        });
        file.path = `/${type}/${name}`;
        result.push(file)
      }

      Array.isArray(file) 
      ? file.map(item=>{saveFile(item)})
      : saveFile(file)

      ctx.success({ data:result} );
    }
  
}


    
module.exports = baseController;