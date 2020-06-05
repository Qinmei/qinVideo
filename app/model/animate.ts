export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const AnimateSchema = new Schema(
        {
            title: {
                // 标题
                type: String,
                required: true,
                index: true,
            },
            slug: {
                // 别名, 唯一标识符
                type: String,
                required: true,
                index: true,
                unique: true,
                trim: true,
            },
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                index: true,
            },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            introduce: { type: String, default: '' }, // 简介
            staff: { type: String, default: '' }, // 工作人员
            actor: { type: String, default: '' }, // 声优
            firstPlay: { type: String, default: '20160606' }, // 首播
            isUpdate: { type: Boolean, default: false, index: true }, // 是否连载
            updateDay: { type: Number, default: 0 }, // 周几播放
            updateTime: { type: Number, default: 0 }, // 更新时间
            rateStar: { type: Number, default: 0 }, // 评分星级
            rateCount: { type: Number, default: 0 }, // 评分人数
            impression: { type: String, default: '' }, // 印象
            playType: {
                type: String,
                enum: ['mp4', 'm3u8', 'php'],
                default: 'mp4',
            }, // 播放类型
            noPrefix: { type: Boolean, default: false }, // 不使用设置的等级前缀
            level: { type: Number, default: 0, index: true }, // 等级限定
            linkPrefix: { type: String, default: '' }, // 链接前缀
            downTitle: { type: String, default: '' }, // 下载标题
            downLink: { type: String, default: '' }, // 下载链接
            season: { type: String, default: '' },
            seasonRelate: { type: Schema.Types.ObjectId, ref: 'Season' },
            coverVertical: { type: String, default: '' }, // 竖向大图
            coverHorizontal: { type: String, default: '' }, // 横向大图
            area: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 地区
            kind: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 类型
            year: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 年份
            tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 标签
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    AnimateSchema.virtual('count', {
        ref: 'Count',
        localField: '_id',
        foreignField: 'target',
        justOne: true,
    });

    AnimateSchema.virtual('countPlay', {
        ref: 'History',
        localField: '_id',
        foreignField: 'belong',
        count: true,
    });

    AnimateSchema.virtual('countLike', {
        ref: 'Relation',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    AnimateSchema.virtual('countComment', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    AnimateSchema.virtual('countDanmu', {
        ref: 'Danmu',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    AnimateSchema.virtual('countRating', {
        ref: 'Rate',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    AnimateSchema.virtual('countEposide', {
        ref: 'Eposide',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    AnimateSchema.virtual('eposide', {
        ref: 'Eposide',
        localField: '_id',
        foreignField: 'target',
        options: { sort: { sort: -1 } },
    });

    AnimateSchema.virtual('seasons', {
        ref: 'Animate',
        localField: 'seasonRelate',
        foreignField: 'seasonRelate',
    });

    AnimateSchema.virtual('seasonInfo', {
        ref: 'Season',
        localField: 'seasonRelate',
        foreignField: '_id',
        justOne: true,
    });

    return mongoose.model('Animate', AnimateSchema);
};
