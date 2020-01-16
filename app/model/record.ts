export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const RecordSchema = new Schema(
        {
            source: { type: Schema.Types.ObjectId, ref: 'Source' },
            total: { type: Number, default: 0 },
            success: { type: Number, default: 0 },
            fail: { type: Number, default: 0 },
            author: { type: Schema.Types.ObjectId, ref: 'User' },
            type: { type: String, enum: ['import', 'save'] },
            kind: { type: String, enum: ['Animate', 'Comic', 'All'] },
            content: [{ type: String }],
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Record', RecordSchema);
};
