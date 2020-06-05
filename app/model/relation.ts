export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const RelationSchema = new Schema(
        {
            target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel', index: true },
            onModel: {
                type: String,
                required: true,
                enum: ['Comic', 'Animate', 'User', 'Post', 'Comment', 'Blog'],
            },
            author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Relation', RelationSchema);
};
