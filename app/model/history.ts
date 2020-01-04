export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const HistorySchema = new mongoose.Schema(
        {
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
            onModel: {
                type: String,
                required: true,
                enum: ['Eposide', 'Post', 'User'],
            },
            belong: { type: Schema.Types.ObjectId, refPath: 'onModel2' },
            onModel2: {
                type: String,
                enum: ['Comic', 'Animate'],
            },
            author: { type: Schema.Types.ObjectId, ref: 'User' },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
        }
    );

    return mongoose.model('History', HistorySchema);
};
