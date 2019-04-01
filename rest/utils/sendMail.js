const nodemailer = require('nodemailer');
const sendgridgMail = require('@sendgrid/mail');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { ConfigModel } = require('../models/index');

const sendEmail = async ({to,subject = '',text = 'hello',html= ''})=>{
    let smtp = {
        host:'',
        port: 0,
        secure:false,
        user: '',
        pass:''
    }
    
    let sendgrid = {
        key:''
    };

    let setting = {
        type:'smtp',
        name:'',
        sender:''
    }

    let content = {
        from:'',
        to,
        subject,
        text,
        html,
    }

    const data = await ConfigModel.find();

    if(data){
        const newData = data[0].toJSON();
        smtp = newData.smtp;
        sendgrid = newData.sendgrid;
        setting = newData.emailSetting;
        content.from = `${setting.name}<${settig.sender}>`;
    }

    switch(setting.type){
        case 'smtp':
            smtpSend(smtp,content);
            break;
        case 'sendgrid':
            sendgridSend(sendgrid,content);
            break;
        default:
            break;
    }
    

}

const smtpSend = (smtp,mailContent)=>{
    const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        auth: {
          user: smtp.user,
          pass: smtp.pass
        }
    });

    transporter.sendMail(mailContent, (error, info) => {
      if (error) {
        return error;
      }
    });
}

const sendgridSend = (sendgrid,mailContent)=>{
    sendgridgMail.setApiKey(sendgrid.key);
    sendgridgMail.send(mailContent);
}

module.exports = sendEmail;

