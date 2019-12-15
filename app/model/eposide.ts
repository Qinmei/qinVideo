export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const EposideSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
                index: true,
            },
            sort: {
                type: Number,
                required: true,
                index: true,
            },
            cover: {
                type: String,
            },
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
            onModel: {
                type: String,
                required: true,
                enum: ['Comic', 'Animate'],
            },
            link: [
                {
                    name: String,
                    value: String,
                },
            ],
            subtitle: [
                {
                    name: String,
                    value: String,
                },
            ],
            preview: [{ type: String }],
            bilibili: {
                type: String,
            },
            noSetPrefix: { type: Boolean, default: false },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    EposideSchema.virtual('countPlay', {
        ref: 'History',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    EposideSchema.virtual('countComment', {
        ref: 'Comment',
        localField: '_id',
        foreignField: 'target',
        options: { match: { status: 'publish' } },
        count: true,
    });

    EposideSchema.virtual('countDanmu', {
        ref: 'Danmu',
        localField: '_id',
        foreignField: 'target',
        count: true,
    });

    return mongoose.model('Eposide', EposideSchema);
};
