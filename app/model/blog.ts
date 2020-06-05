export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const BlogSchema = new Schema(
        {
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            target: { type: Schema.Types.ObjectId, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                enum: ['Comic', 'Animate', 'Eposide', 'Post', 'Blog'],
            },
            content: {
                type: String,
            },
            image: [{ type: String }],
            video: { type: String },
            link: { type: String },
            hot: {
                type: Number,
                default: 0,
            },
            tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    BlogSchema.virtual('countPlay', {
        ref: 'History',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    BlogSchema.virtual('countLike', {
        ref: 'Relation',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    BlogSchema.virtual('countComment', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'target',
        options: { match: { status: 'publish' } },
        count: true,
    });

    return mongoose.model('Blog', BlogSchema);
};
