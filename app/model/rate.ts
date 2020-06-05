export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const RateSchema = new Schema(
        {
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                required: true,
                enum: ['Comic', 'Animate'],
            },
            rate: {
                type: Number,
                required: true,
                index: true,
            },
            content: {
                type: String,
                required: false,
            },
            author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Rate', RateSchema);
};
