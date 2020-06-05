export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const HistorySchema = new mongoose.Schema(
        {
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                required: true,
                enum: ['Eposide', 'Post', 'User'],
            },
            author: { type: Schema.Types.ObjectId, ref: 'User' },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('History', HistorySchema);
};
