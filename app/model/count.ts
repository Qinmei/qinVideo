export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CountSchema = new mongoose.Schema(
        {
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                required: true,
                enum: ['Eposide', 'Post', 'User', 'Comic', 'Animate', 'Blog'],
            },
            comment: { type: Number, default: 0 },
            subComment: { type: Number, default: 0 },
            danmu: { type: Number, default: 0 },
            play: { type: Number, default: 0 }, // 用户
            view: { type: Number, default: 0 }, // 游客
            rateStar: { type: Number, default: 0 },
            rateCount: { type: Number, default: 0 },
            like: { type: Number, default: 0 },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Count', CountSchema);
};
