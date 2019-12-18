export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const SeasonSchema = new Schema(
        {
            name: {
                type: String,
                required: true,
                index: true,
                trim: true,
            },
            cover: {
                type: String,
                default: '',
            },
            introduce: {
                type: String,
                default: '',
            },
            impress: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                enum: ['animate', 'comic', 'post'],
                required: true,
            },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    SeasonSchema.virtual('animate', {
        ref: 'Animate',
        localField: '_id',
        foreignField: 'seasonRelate',
        options: { sort: { season: -1 } },
    });

    SeasonSchema.virtual('comic', {
        ref: 'Comic',
        localField: '_id',
        foreignField: 'seasonRelate',
        options: { sort: { season: -1 } },
    });

    SeasonSchema.virtual('post', {
        ref: 'Post',
        localField: '_id',
        foreignField: 'seasonRelate',
        options: { sort: { season: -1 } },
    });

    SeasonSchema.virtual('animateCount', {
        ref: 'Animate',
        localField: '_id',
        foreignField: 'seasonRelate',
        count: true,
    });

    SeasonSchema.virtual('comicCount', {
        ref: 'Comic',
        localField: '_id',
        foreignField: 'seasonRelate',
        count: true,
    });

    SeasonSchema.virtual('postCount', {
        ref: 'Post',
        localField: '_id',
        foreignField: 'seasonRelate',
        count: true,
    });

    return mongoose.model('Season', SeasonSchema);
};
