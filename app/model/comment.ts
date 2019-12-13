export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CommentSchema = new Schema(
        {
            author: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
            target: { type: Schema.Types.ObjectId, refPath: 'onModel' },
            onModel: {
                type: String,
                enum: ['Comic', 'Animate', 'Eposide', 'Post', 'Blog'],
            },
            replyTo: { type: Schema.Types.ObjectId, ref: 'User' }, // 回复人
            parent: { type: Schema.Types.ObjectId, ref: 'Comment' }, // 父级
            content: { type: String, required: true }, // 内容
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    CommentSchema.virtual('countLike', {
        ref: 'Relation',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    CommentSchema.virtual('children', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'parent',
    });

    return mongoose.model('Comment', CommentSchema);
};
