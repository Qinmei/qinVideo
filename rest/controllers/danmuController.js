const {
    DanmuModel,
} = require('../models/index');

class danmuController {
  
    // 评论列表
    static async danmu_query(ctx) {
        const {
            size=10,
            page=1,
            sort='-createdAt',
            player,
            text
        } = ctx.query;

        const pattern = /^-/;
        const sortOrder =  pattern.test(sort) ? -1 : 1;
        const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
        const skip = (page - 1) * size;

        const danmuQuery = {};
        text && ( danmuQuery.text = {$regex:text,$options:"$i"} );
        player && ( danmuQuery.player = {$regex:player,$options:"$i"} );

        const data = await DanmuModel.aggregate([
                                        {$match:danmuQuery},
                                        {$sort:{
                                            [sortBy] : sortOrder
                                        }},
                                        { $skip : skip },
                                        { $limit : parseInt(size) }
                                      ])
        const total = await DanmuModel.countDocuments(danmuQuery);
        ctx.send({ data,total } );
    }

    // danmu post 
    static async danmu_post(ctx) {
        const danmu = ctx.request.body;
        const { user } = ctx.state;
        danmu.author = user._id;
        const data = await DanmuModel.create(danmu).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

    // danmu delete
    static async danmu_delete(ctx) {
        const { type,list } = ctx.request.body;
        const { player } = ctx.query;
        const danmuQuery = {};
        player && ( danmuQuery.player = {$regex:player,$options:"$i"} );

        if(type === 'all'){
            const data = await DanmuModel.remove(danmuQuery);
            ctx.send({ data } );
        }else{
            const data = await DanmuModel.remove({ _id: { $in: list } });
            ctx.send({ data } );
        };

    }

}
    
module.exports = danmuController;