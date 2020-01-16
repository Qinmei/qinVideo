export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const SourceSchema = new Schema(
        {
            source: { type: String },
            api: { type: String },
            cat: { type: Number },
            type: { type: String, enum: ['Animate', 'Comic'] },
            update: { type: Boolean, default: false },
            slugPrefix: { type: String, default: '' },
            mode: { type: String, default: 'maccms' },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Source', SourceSchema);
};
