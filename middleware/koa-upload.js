const koaBody = require('koa-body');
const path = require('path');
const fs = require('fs');

module.exports =  koaBody({
        multipart:true,
        formidable:{
            uploadDir:path.join(__dirname, '../public/uploads'),
            keepExtensions: true,
            maxFieldsSize:20 * 1024 * 1024,
            onFileBegin:(name,file)=>{
                const filePath = path.join(__dirname, '../public/uploads');
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath);
                };
            }
        }
    })