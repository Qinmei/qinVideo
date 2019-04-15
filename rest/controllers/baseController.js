const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const stringRandom = require('string-random');
const { MD5 } = require('../utils/common');
const config = require('../../config');
const sendemail = require('../utils/sendMail');

const {
    UserModel,
    KeyModel,
    DataModel
  } = require('../models/index');

class baseController {
  
    // 登录
    static async login(ctx) {
      const {name,password} = ctx.request.body;
      const nameResult = await UserModel.findOne({name});
      const passwordResult = MD5(config.salt + password ) ===  nameResult.password;
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
              introduce,
              refreshToken
            } = nameResult;

      const token = jwt.sign(
        {id:_id,name,email,level,score,avatar,background,introduce},
        config.tokenSecret, 
        { expiresIn: '1d'}
      );
      await DataModel.create({type:'login'}).catch(err=>err); 
      ctx.success({ data:{token,refreshToken}} );
    }

    // 注册
    static async register(ctx) {
      const {name,email,password} = ctx.request.body;
      const newPass = MD5(config.salt + password);
      const refreshToken = new mongoose.Types.ObjectId().toString() + stringRandom(16);
      const data = await UserModel.create({name,password:newPass,email,refreshToken}).catch(err=>{return {code:404,msg:err.message}});
      await DataModel.create({type:'register'}).catch(err=>err);      
      ctx.send({ data} );
    }

    // 刷新token
    static async refreshtoken(ctx) {
      const {refreshToken} = ctx.request.body;
      const nameResult = await UserModel.findOne({refreshToken});

      if(nameResult){
        const { _id,
                email,
                name,
                level,
                score,
                avatar,
                background,
                introduce
              } = nameResult;
        const token = jwt.sign(
          {id:_id,name,email,level,score,avatar,background,introduce},
          config.tokenSecret, 
          { expiresIn: '1d'}
        );
        await DataModel.create({type:'login'}).catch(err=>err);       
        ctx.success({data:{token},msg:'刷新成功'})
      }else{
        return ctx.error({code:403,msg:'refreshToken错误'})
      }
    }

    // 重置密码-发送邮件

    static async resetPasswordMail(ctx) {
      const { name, email } = ctx.request.body;
      let userInfo;
      if(name){
        userInfo = await UserModel.findOne({name});
      }else if(email){
        userInfo = await UserModel.findOne({email});
      }else{
        return ctx.error({code:404,msg:'please fill it'})
      };

      if(!userInfo){
        return ctx.error({code:404,msg:'用户名或邮箱错误'})
      }

      const { name, email } = userInfo;
      const token = jwt.sign({ name },config.tokenSecret, { expiresIn: '2h'});

      sendemail({
        to:email,
        subject:'重置密码',
        text:'',
        html:`<h3>亲爱的${name}:<h3><p>您正在进行重置密码的操作,如果不是您本人所为请忽略此邮件,确认重置密码请复制点击下方验证码:</p><p style='margin-left:30px;font-size:20px'>${token}</p>`
      })
      
      ctx.success({data:{},msg:'邮件发送成功'})
    }

    // 更新密码
    static async resetPasswordAuth(ctx) {
      const { password, token } = ctx.request.body;
      try{
        const { name } = await jwt.verify(token,config.tokenSecret);
        const newPass = MD5(config.salt + password );
        const refreshToken = new mongoose.Types.ObjectId().toString() + stringRandom(16);
        await UserModel.updateOne({name},{$set:{password:newPass,refreshToken}}).catch(err=>{return {code:404,msg:err.message}});
        ctx.success({msg:'修改成功'})

      }catch(err){
          return ctx.error({
            code:404,
            msg:err.message
          })
      }
    }

    // 使用激活码
    static async useKey(ctx){
      const { key } = ctx.request.body;
      const { user } = ctx.state;
      const keyInfo = await KeyModel.findOne({key,status:'unactive'});
      if(keyInfo){
        const { price } = keyInfo;
        await KeyModel.findOneAndUpdate({key},{$set:{status:'active'}});
        await UserModel.findByIdAndUpdate(user._id,{$inc:{money:`+${price}`}});

        await DataModel.create({type:'key'}).catch(err=>err); 
        ctx.success({ code:200,msg:'激活码使用成功' });
      }else{
        ctx.error({code:406,msg:'激活码无效'})
      }

    }

    // 上传文件
    static async upload(ctx) {
      const result = [];
      const { file }= ctx.request.files;
      const { type } = ctx.request.body;
      const typePath = ['animate','post','comment','avatar','background','config','others'].includes(type) ? type : 'others';
      const dirPath = path.join(__dirname, '../../public') + `/${typePath}`;
      !fs.existsSync(dirPath) && await fs.mkdirSync(dirPath);

      async function saveFile(file){
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
          const fileName = file.hash;
          const fileExt = path.extname(file.name);
          const name = `${fileName}${fileExt}`;
          const oldPath = file.path;
          const reader = await fs.createReadStream(file.path);
          const upStream = await fs.createWriteStream(dirPath + `/${name}`);
          await reader.pipe(upStream);
          fs.exists(oldPath,()=>{
            fs.unlinkSync(oldPath);
          });
          file.path = `/${typePath}/${name}`;
          result.push(file)
        }else{
          return ctx.error({code:404,msg:'不支持的格式'})
        }
      }

      Array.isArray(file) 
      ? file.map(item=>{saveFile(item)})
      : saveFile(file)

      ctx.success({ data:result} );
    }


    // 管理图片列表
    static async image_query(ctx){
      const { type } = ctx.params;
      const typePath = ['animate','post','comment','avatar','background','config','others'].includes(type) ? type : 'others';
      const dirPath = path.join(__dirname, `../../public/${typePath}`);
      !fs.existsSync(dirPath) && fs.mkdirSync(dirPath);
      const data = fs.readdirSync(dirPath).map(item=>`/${typePath}/${item}`);
      ctx.success({ data });
    }

    // 删除图片
    static async image_delete(ctx){
      const { list } = ctx.request.body;
      list.map(item=>{
        const filePath = path.join(__dirname, '../../public') + `${item}`;
        fs.exists(filePath,()=>{
          fs.unlinkSync(filePath);
        });
      })

      ctx.success({data:{},msg:'删除成功'})
    }
  
}


    
module.exports = baseController;