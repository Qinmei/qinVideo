const koaBody = require('koa-body');
const path = require('path');
const fs = require('fs');

module.exports =  koaBody({
    multipart:true,
    strict: false,
    formidable:{
        uploadDir:path.join(__dirname, '../../uploads'),
        keepExtensions: true,
        hash:'md5',
        maxFieldsSize:20 * 1024 * 1024,
        onFileBegin:(name,file)=>{
            const filePath = path.join(__dirname, '../../uploads');
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            };
        }
    }
})