export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const DanmuSchema = new mongoose.Schema(
        {
            target: { type: Schema.Types.ObjectId, ref: 'Eposide' },
            author: { type: Schema.Types.ObjectId, ref: 'User' },
            time: { type: Number, default: 0, index: true },
            text: { type: String, required: true },
            color: { type: Number, default: 16777215 },
            type: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            ip: String,
            referer: String,
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
        }
    );

    return mongoose.model('Danmu', DanmuSchema);
};
