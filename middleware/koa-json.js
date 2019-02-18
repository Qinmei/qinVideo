module.exports = async (ctx, next) => {
    ctx.error = ({ data, msg, status,error }) => {
       ctx.status= status||400;
       ctx.body = { code: -200, msg, data, error };
    }
    ctx.success = ({ data, msg,total }) => {
        ctx.body = { code: 200, msg, total, data };
    }

    ctx.send = ({result, success, error, total})=>{
        result ? ctx.success({data:result, msg:success,total}) : ctx.error({msg:error})
    }
    await next()
}