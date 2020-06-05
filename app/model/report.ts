export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ReportSchema = new Schema(
        {
            author: { type: Schema.Types.ObjectId, ref: 'User' },
            content: { type: String, required: true },
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                required: true,
                enum: ['Comic', 'Animate', 'Comment', 'User', 'Post', 'Eposide', 'Blog'],
            },
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

    return mongoose.model('Report', ReportSchema);
};
