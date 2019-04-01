const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const {
    OrderModel,
  } = require('../models/index');

const authorLookup = {$lookup:{
    from: 'users',
    let: { value:'$user'},
    pipeline: [
      {$match: {
        $expr: {
          $eq: ['$_id', '$$value'] 
        }
      }},
      {$project:{
        _id:0,
        name:1 ,
        email:1,
        expired:1,
        level:1 ,
        score:1 ,
        avatar:1 ,
        background:1 ,
        introduce:1      
      }}
    ],
    as: 'user'
}}

const shopLookup = {$lookup:{
    from: 'shops',
    let: { value:'$shop'},
    pipeline: [
      {$match: {
        $expr: {
          $eq: ['$_id', '$$value'] 
        }
      }}
    ],
    as: 'shop'
}}

const unwindList = ['$shop','$user'].map(item=>{
    return {$unwind: {
                "path":item,
                "preserveNullAndEmptyArrays": true
                } 
            }
})

class orderController {
  
    // query列表
    static async order_query(ctx) {
        const {
            size=10,
            page=1,
            sort='-_id',
            id=null,
        } = ctx.query;

        const pattern = /^-/;
        const sortOrder =  pattern.test(sort) ? -1 : 1;
        const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
        const skip = (page - 1) * size;

        const shopQuery = {};
        if(id && ObjectId.isValid(id)) shopQuery._id = new ObjectId(id);

        const data = await OrderModel.aggregate([
                                        {$match :shopQuery},
                                        authorLookup,
                                        shopLookup,
                                        ...unwindList,
                                        {$sort:{
                                            [sortBy] : sortOrder
                                        }},
                                        { $skip : skip },
                                        { $limit : parseInt(size) }
                                      ])
        const total = await OrderModel.countDocuments(shopQuery);
        ctx.send({ data,total} );
    }
  
    // post Get
    static async order_get(ctx) {
        const { id } = ctx.params;
        const data = await OrderModel.findById(id).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    static async order_post(ctx) {
        const shop = ctx.request.body;
        const { user } = ctx.state;
        shop.user = user._id;
        const data = await OrderModel.create(shop).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // post delete
    static async order_delete(ctx) {
        const { id } = ctx.params;

        const data = await OrderModel.findByIdAndDelete(id).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );

    }

    static async order_delete_batch(ctx) {
        const { type,list } = ctx.request.body;

        if(type === 'all'){
            const data = await OrderModel.remove({}).catch(err=>{return {code:404,msg:err.message}});
            ctx.send({ data } );
        }else{
            const data = await OrderModel.remove({ _id: { $in: list } }).catch(err=>{return {code:404,msg:err.message}});
            ctx.send({ data } );
        };

    }

}
    
module.exports = orderController;