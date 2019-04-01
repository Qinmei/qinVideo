const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const DanmuSchema = new mongoose.Schema({
    player: {
        type: String,
        index: true,
        required:true,
        trim:true
    },
    author: String,
    time: {type:Number,default:0},
    text: {type:String,required:true},
    color: {type:Number,default:16777215},
    type: {type:Number,default:0},
    ip: String,
    referer: String,
    addons:Schema.Types.Mixed
    },{
        timestamps: true
    }
);

module.exports=mongoose.model('Danmu', DanmuSchema);
