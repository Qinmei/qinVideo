export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const PostSchema = new Schema(
        {
            title: {
                // 标题
                type: String,
                required: true,
            },
            slug: {
                // 别名, 唯一标识符
                type: String,
                required: true,
                index: true,
                unique: true,
                trim: true,
            },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            level: { type: Number, default: 0 }, // 等级限定
            author: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
            kind: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 分类
            tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 标签
            season: { type: String, default: '' },
            seasonRelate: { type: Schema.Types.ObjectId, ref: 'Season' },
            cover: { type: String, default: '' }, // 封面图
            introduce: { type: String, default: '' },
            content: { type: String, default: '' }, // 内容
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    PostSchema.virtual('countPlay', {
        ref: 'History',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    PostSchema.virtual('countLike', {
        ref: 'Relation',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    PostSchema.virtual('countComment', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    PostSchema.virtual('seasons', {
        ref: 'Post',
        localField: 'seasonRelate',
        foreignField: 'seasonRelate',
    });

    PostSchema.virtual('seasonInfo', {
        ref: 'Season',
        localField: 'seasonRelate',
        foreignField: '_id',
        justOne: true,
    });

    return mongoose.model('Post', PostSchema);
};
